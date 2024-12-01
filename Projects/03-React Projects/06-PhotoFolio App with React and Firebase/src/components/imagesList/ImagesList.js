import styles from "./imageList.module.css";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

// components imports
import { ImageForm } from "../imageForm/ImageForm";
import { Carousel } from "../carousel/Carousel";

// firebase imports
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
  Timestamp,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

// storing images
let IMAGES;

// mock data
// import { imagesData } from "../../static/mock";

export const ImagesList = ({ albumId, albumName, onBack }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchIntent, setSearchIntent] = useState(false);
  const searchInput = useRef();

  // async function
  const getImages = async () => {
    setLoading(true);
    const imagesRef = collection(db, "albums", albumId, "images");
    const imagesSnapshot = await getDocs(
      query(imagesRef, orderBy("created", "desc"))
    );
    const imagesData = imagesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setImages(imagesData);
    IMAGES = imagesData;
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const [addImageIntent, setAddImageIntent] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const [updateImageIntent, setUpdateImageIntent] = useState(false);

  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [activeHoverImageIndex, setActiveHoverImageIndex] = useState(null);

  const handleNext = () => {
    if (activeImageIndex === images.length - 1) return setActiveImageIndex(0);
    setActiveImageIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeImageIndex === 0) return setActiveImageIndex(images.length - 1);
    setActiveImageIndex((prev) => prev - 1);
  };
  const handleCancel = () => setActiveImageIndex(null);

  const handleSearchClick = () => {
    if (searchIntent) {
      searchInput.current.value = "";
      getImages();
    }
    setSearchIntent(!searchIntent);
  };

  const handleSearch = async () => {
    const query = searchInput.current.value;
    if (!query) return IMAGES;

    const filteredImages = IMAGES.filter((i) => i.title.includes(query));
    setImages(filteredImages);
  };

  // async functions
  const handleAdd = async ({ title, url }) => {
    setImgLoading(true);
    const imageRef = await addDoc(collection(db, "albums", albumId, "images"), {
      title,
      url,
      created: Timestamp.now(),
    });
    setImages((prev) => [{ id: imageRef.id, title, url }, ...prev]);

    toast.success("Image added successfully.");
    setImgLoading(false);
  };

  const handleUpdate = async ({ title, url }) => {
    setImgLoading(true);
    const imageRef = doc(db, "albums", albumId, "images", updateImageIntent.id);

    await setDoc(imageRef, {
      title,
      url,
      created: Timestamp.now(),
    });

    const updatedImages = images.map((image) => {
      if (image.id === imageRef.id) {
        return { id: imageRef.id, title, url };
      }
      return image;
    });

    setImages(updatedImages);
    toast.success("Image updated successfully.");
    setImgLoading(false);
    setUpdateImageIntent(false);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();

    await deleteDoc(doc(db, "albums", albumId, "images", id));
    const filteredImages = images.filter((i) => i.id !== id);
    setImages(filteredImages);

    toast.success("Image deleted successfully.");
  };

  if (!images.length && !searchInput.current?.value && !loading) {
    return (
      <>
        <div className={styles.top}>
          <span onClick={onBack}>
            <img src="/assets/back.png" alt="back" />
          </span>
          <h3>No images found in the album.</h3>
          <button
            className={`${addImageIntent && styles.active}`}
            onClick={() => setAddImageIntent(!addImageIntent)}
          >
            {!addImageIntent ? "Add image" : "Cancel"}
          </button>
        </div>
        {addImageIntent && (
          <ImageForm
            loading={imgLoading}
            onAdd={handleAdd}
            albumName={albumName}
          />
        )}
      </>
    );
  }
  return (
    <>
      {(addImageIntent || updateImageIntent) && (
        <ImageForm
          loading={imgLoading}
          onAdd={handleAdd}
          albumName={albumName}
          onUpdate={handleUpdate}
          updateIntent={updateImageIntent}
        />
      )}
      {(activeImageIndex || activeImageIndex === 0) && (
        <Carousel
          title={images[activeImageIndex].title}
          url={images[activeImageIndex].url}
          onNext={handleNext}
          onPrev={handlePrev}
          onCancel={handleCancel}
        />
      )}
      <div className={styles.top}>
        <span onClick={onBack}>
          <img src="/assets/back.png" alt="back" />
        </span>
        <h3>Images in {albumName}</h3>

        <div className={styles.search}>
          {searchIntent && (
            <input
              placeholder="Search..."
              onChange={handleSearch}
              ref={searchInput}
              autoFocus={true}
            />
          )}
          <img
            onClick={handleSearchClick}
            src={!searchIntent ? "/assets/search.png" : "/assets/clear.png"}
            alt="clear"
          />
        </div>
        {updateImageIntent && (
          <button
            className={styles.active}
            onClick={() => setUpdateImageIntent(false)}
          >
            Cancel
          </button>
        )}
        {!updateImageIntent && (
          <button
            className={`${addImageIntent && styles.active}`}
            onClick={() => setAddImageIntent(!addImageIntent)}
          >
            {!addImageIntent ? "Add image" : "Cancel"}
          </button>
        )}
      </div>
      {loading && (
        <div className={styles.loader}>
          <Spinner color="#0077ff" />
        </div>
      )}
      {!loading && (
        <div className={styles.imageList}>
          {images.map((image, i) => (
            <div
              key={image.id}
              className={styles.image}
              onMouseOver={() => setActiveHoverImageIndex(i)}
              onMouseOut={() => setActiveHoverImageIndex(null)}
              onClick={() => setActiveImageIndex(i)}
            >
              <div
                className={`${styles.update} ${
                  activeHoverImageIndex === i && styles.active
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setUpdateImageIntent(image);
                }}
              >
                <img src="/assets/edit.png" alt="update" />
              </div>
              <div
                className={`${styles.delete} ${
                  activeHoverImageIndex === i && styles.active
                }`}
                onClick={(e) => handleDelete(e, image.id)}
              >
                <img src="/assets/trash-bin.png" alt="delete" />
              </div>
              <img
                src={image.url}
                alt={image.title}
                onError={({ currentTarget }) => {
                  currentTarget.src = "/assets/warning.png";
                }}
              />
              <span>{image.title.substring(0, 20)}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

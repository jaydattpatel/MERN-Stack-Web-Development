import styles from "./imageForm.module.css";
import { useEffect, useRef } from "react";

export const ImageForm = ({
  updateIntent,
  albumName,
  onAdd,
  onUpdate,
  loading,
}) => {
  const imageTitleInput = useRef();
  const imageUrlInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = imageTitleInput.current.value;
    const url = imageUrlInput.current.value;

    if (!updateIntent) onAdd({ title, url });
    else onUpdate({ title, url });
    handleClear();
  };

  const handleClear = () => {
    imageTitleInput.current.value = "";
    imageUrlInput.current.value = "";
  };

  const handleDefaultValues = () => {
    imageTitleInput.current.value = updateIntent.title;
    imageUrlInput.current.value = updateIntent.url;
  };

  useEffect(() => {
    if (updateIntent) {
      handleDefaultValues();
    }
  }, [updateIntent]);

  return (
    <div className={styles.imageForm}>
      <span>
        {!updateIntent
          ? `Add image to ${albumName}`
          : `Update image ${updateIntent.title}`}
      </span>

      <form onSubmit={handleSubmit}>
        <input required placeholder="Title" ref={imageTitleInput} />
        <input required placeholder="Image URL" ref={imageUrlInput} />
        <div className={styles.actions}>
          <button type="button" onClick={handleClear} disabled={loading}>
            Clear
          </button>
          <button disabled={loading}>{!updateIntent ? "Add" : "Update"}</button>
        </div>
      </form>
    </div>
  );
};

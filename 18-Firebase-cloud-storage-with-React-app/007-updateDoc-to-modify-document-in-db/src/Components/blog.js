//Blogging App with Firebase

import "./blog.css";

import { useState, useRef, useEffect } from "react";
import db from "../firebase-init";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

export default function Blog() {
  const [formData, setformData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const [blogToupdate, setBlogToUpdate] = useState(null);

  const titleRef = useRef(null);

  //fun for update realtime data from snapshot firebase
  async function updateData(snapShot) {
    const blogs = snapShot.docs.map((doc) => {
      console.log(doc);
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setBlogs(blogs);
  }

  // adding blog in firebase
  async function addBlog() {
    if (!blogToupdate) {
      //getting collection reference
      const docRef = doc(collection(db, "blogs"));

      // add or overwrite new document in collection
      await setDoc(docRef, {
        title: formData.title,
        content: formData.content,
        createdOn: new Date(),
      });
    } else {
      const docRef = doc(db, "blogs", blogToupdate.id);
      await updateDoc(docRef, {
        title: formData.title,
        content: formData.content,
      });
      setBlogToUpdate(null);
    }

    setformData({ title: "", content: "" });
    titleRef.current.focus();
  }

  useEffect(() => {
    titleRef.current.focus();

    // Get RealTime Updates from the databse using onSnapshot()
    // subscribe listener when componentDidMount
    const result = onSnapshot(collection(db, "blogs"), (snapShot) => {
      updateData(snapShot);
    });

    return () => {
      // unsubscribe listener when componentWillUnmount
      result();
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    addBlog();
  }
  async function updateBlog(blog) {
    setBlogToUpdate(blog);
    setformData({ title: blog.title, content: blog.content });
    titleRef.current.focus();
  }

  async function removeBlog(id) {
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
  }

  return (
    <>
      <h1>Write a Blog!</h1>
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              ref={titleRef}
              value={formData.title}
              onChange={(e) =>
                setformData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              required
              value={formData.content}
              onChange={(e) =>
                setformData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <hr />
          <p>{blog.content}</p>

          <div className="blog-btn">
            <button
              onClick={() => {
                updateBlog(blog);
              }}
              className="btn update"
            >
              Update
            </button>
            <button
              onClick={() => {
                removeBlog(blog.id);
              }}
              className="btn remove"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}

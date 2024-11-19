//Blogging App with Firebase

import "./blog.css";

import { useState, useRef, useEffect } from "react";
import db from "../firebase-init";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Blog() {
  const [formData, setformData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);

  const titleRef = useRef(null);

  // fetch data from firebase
  async function fetchData() {
    const snapShot = await getDocs(collection(db, "blogs"));

    const blogs = snapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setBlogs(blogs);
  }

  // adding blogs to local state and also in firebase
  async function addBlog() {
    //getting collection reference
    const collectionRef = collection(db, "blogs");

    // adding new document in collection reference
    await addDoc(collectionRef, {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });

    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);

    setformData({ title: "", content: "" });
    titleRef.current.focus();
  }

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    //  get all the documents from the fireStore using getDocs() when componentDidMount
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    addBlog();
  }

  async function removeBlog(i) {
    setBlogs(blogs.filter((blog, index) => index !== i));
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
                removeBlog(i);
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

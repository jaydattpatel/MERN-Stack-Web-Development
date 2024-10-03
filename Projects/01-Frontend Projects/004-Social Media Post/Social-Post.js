let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
  },
];

postsData.forEach((post) => {
  let postID = 0;
  do {
    postID = Math.round(Math.random() * 1000);
  } while (postID <= 0);

  post.image = `https://picsum.photos/id/${postID}/500/300`;
});

let posts = document.querySelector("#posts");

function renderPosts() {
  posts.innerHTML = "";

  for (let postInfo of postsData) {
    let post = document.createElement("div");
    post.classList.add("post");

    let h3 = document.createElement("h3");
    h3.textContent = postInfo.author;
    post.appendChild(h3);

    let img = document.createElement("img");
    img.src = postInfo.image;
    post.appendChild(img);

    let p = document.createElement("p");
    p.textContent = postInfo.content;
    post.appendChild(p);

    let info = document.createElement("div");
    info.classList.add("info");

    let likeBtn = document.createElement("button");
    likeBtn.textContent = "Like";
    likeBtn.addEventListener("click", () => {
      if (!likeBtn.classList.contains("like-button")) {
        postInfo.likes += 1;
        likeBtn.classList.add("like-button");
        likeBtn.style.backgroundColor = "red";
      } else {
        postInfo.likes -= 1;
        likeBtn.classList.remove("like-button");
        likeBtn.style.backgroundColor = "white";
      }
      updateLikesAndCommentsCounter();
    });
    info.appendChild(likeBtn);

    let commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Write a comment...";

    info.appendChild(commentInput);

    let commentBtn = document.createElement("button");
    commentBtn.textContent = "Comment";
    commentBtn.addEventListener("click", () => {
      if (!(commentInput.value === "")) {
        postInfo.comments.push(commentInput.value);
        commentInput.value = "";
        updateLikesAndCommentsCounter();
        updateComments();
      }
    });
    info.appendChild(commentBtn);

    let footer = document.createElement("div");
    footer.classList.add("post-footer");
    function updateLikesAndCommentsCounter() {
      footer.textContent = `Likes: ${postInfo.likes} Comments: ${postInfo.comments.length}`;
    }
    updateLikesAndCommentsCounter();
    footer.addEventListener("click", () => {
      if (commentDiv.style.display === "none") {
        commentDiv.style.display = "block";
      } else commentDiv.style.display = "none";
    });
    info.appendChild(footer);

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comments-container");
    commentDiv.style.display = "none";
    info.appendChild(commentDiv);
    post.appendChild(info);

    function updateComments() {
      commentDiv.innerHTML = "";
      for (let comment of postInfo.comments) {
        let com = document.createElement("p");
        com.textContent = comment;
        commentDiv.appendChild(com);
      }
    }
    updateComments();

    posts.appendChild(post);
  }
}

function addPost() {
  let postInput = document.querySelector("#postInput");
  let imageInput = document.querySelector("#imageInput");
  let caption = postInput.value;
  const imageURL = imageInput.value; //getting files data from image input

  if (caption.trim() === "" || imageURL.trim() === "") {
    return;
  }

  //   const imageURL = URL.createObjectURL(image); // create URL of file

  postsData.push({
    id: postsData.length + 1,
    author: "None",
    content: caption,
    likes: 0,
    comments: [],
    image: imageURL,
  });

  postInput.value = "";
  imageInput.value = "";

  renderPosts();
}

let postForm = document.querySelector("#postForm");
postForm.addEventListener("submit", (event) => {
  event.preventDefault(); //event.preventDefault() to stop page to refresh when submit
  addPost();
});

renderPosts();

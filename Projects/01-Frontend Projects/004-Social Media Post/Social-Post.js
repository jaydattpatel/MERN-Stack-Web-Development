
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];


let posts = document.querySelector('#posts');

function renderPosts(){

    posts.innerHTML = '';

    for(let postInfo of postsData){
        
        let post = document.createElement('div');
        post.classList.add('post');

        let h3 = document.createElement('h3');
        h3.textContent = postInfo.author;
        post.appendChild(h3);

        let img = document.createElement('img');
        img.src = postInfo.image;
        post.appendChild(img);

        let p = document.createElement('p');
        p.textContent = postInfo.content;
        post.appendChild(p);

        let likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like';
        likeBtn.addEventListener('click',()=>{
            if(! likeBtn.classList.contains('like-button')){
                postInfo.likes += 1;
                likeBtn.classList.add("like-button");
                likeBtn.style.backgroundColor = 'red';
                updateLikesAndCommentsCounter();
            }
        });
        post.appendChild(likeBtn);

        let commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Write a comment...';

        post.appendChild(commentInput);

        let commentBtn = document.createElement('button');
        commentBtn.textContent = 'Comment';
        commentBtn.addEventListener('click',()=>{
            if(!(commentInput.value === '')){
                postInfo.comments.push(commentInput.value);
                commentInput.value = '';
                updateLikesAndCommentsCounter();
                updateComments();
            }
        });
        post.appendChild(commentBtn);

        let footer = document.createElement('div');
        footer.classList.add("post-footer");
        function updateLikesAndCommentsCounter(){
            footer.textContent =  `Likes: ${postInfo.likes} Comments: ${postInfo.comments.length}`;
        };
        updateLikesAndCommentsCounter();
        footer.addEventListener('click',()=>{
            if(commentDiv.style.display === 'none') {
                commentDiv.style.display = 'block';
            }else
                commentDiv.style.display = 'none';
        });
        post.appendChild(footer);

        let commentDiv = document.createElement('div');
        commentDiv.classList.add("comments-container");
        commentDiv.style.display = 'none';
        post.appendChild(commentDiv);

        function updateComments(){
            commentDiv.innerHTML = '';
            for(let comment of postInfo.comments){
                let com = document.createElement('p');
                com.textContent = comment;
                commentDiv.appendChild(com);
            }
        }
        updateComments();

        posts.appendChild(post);
    }

}

function addPost(){

    let postInput = document.querySelector('#postInput');
    let imageInput = document.querySelector('#imageInput');
    let caption = postInput.value;
    const image = imageInput.files[0]; //getting files data from image input

    if (caption.trim() === '' || !image) {
        return;
    }

    const imageURL = URL.createObjectURL(image);// create URL of file 

    postsData.push(
    { id: postsData.length + 1, author: 'None', 
        content: caption, likes: 0, comments: [], 
        image: imageURL }
    );

    postInput.value = '';
    imageInput.value = '';

    renderPosts();

}

let postForm = document.querySelector('#postForm');
postForm.addEventListener('submit',(event)=>{
    event.preventDefault(); //event.preventDefault() to stop page to refresh when submit 
    addPost();
});


renderPosts();
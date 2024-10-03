const socket = io.connect();

// DOM elements
const myPrompt = document.getElementById("my-prompt");
const userName = document.getElementById("name");
const message = document.getElementById("text-message");
const sendMessage = document.getElementById("message-form");

// Display prompt on page load
document.addEventListener("DOMContentLoaded", () => {
  myPrompt.style.display = "flex";
});

// Event: User submits prompt form to join
myPrompt.addEventListener("submit", (event) => {
  event.preventDefault();
  const welcome = document.getElementById("welcome");
  welcome.innerText = "Welcome, " + userName.value;
  myPrompt.style.display = "none";
  socket.emit("join", userName.value);
});

// Event: Update online users and old messages
socket.on("onlineUser", (users) => {
  const onlineUser = document.getElementById("online-user");
  onlineUser.innerHTML = "";
  const count = document.getElementById("count");
  count.innerText = "Online(" + users.length + ")";
  users.forEach((user) => {
    let img = "face.png";
    if (user.name == userName.value && user.id == socket.id) {
      img = "me.jpg";
    }
    const newUser = document.createElement("div");
    newUser.innerHTML = `   <div class="user">
                            <img src="images/${img}" alt="R">
                            <p>${user.name}</p>
                            <span class="online-dot"></span>
                            <p id="${user.id}" class="typing"><p>
        
                    </div>`;
    onlineUser.appendChild(newUser);
  });
});

// Event: Display old messages  when loaded from server
socket.on("joined", (oldMessage) => {
  const messageList = document.getElementById("message-list");
  oldMessage.forEach((message) => {
    const oldmsg = document.createElement("div");
    const timestamp = new Date(message.time);

    oldmsg.innerHTML = `
        <div class="message-block" >
            <img src="images/face.png" alt="pic">
            <div class="message-content">
                <span class="name" >${message.name}</span>
                <span class="timestamp">${timestamp.getHours()}:${timestamp.getMinutes()}</span>
                <div class="message" >${message.message}</div>
                
            </div>
        </div>`;
    messageList.appendChild(oldmsg);
  });
  scrollToBottom();
});

let lease = false;
// Event: Typing indicator
message.addEventListener("input", () => {
  if (!lease) {
    lease = true;
    socket.emit("typing", userName.value);
    setTimeout(() => {
      lease = false;
    }, 1500);
  }
});

socket.on("typing", (userId) => {
  if (userId) {
    document.getElementById(userId).innerText = "typing..";
  }
  setTimeout(() => {
    document.getElementById(userId).innerText = "";
  }, 1500);
});

// Event: Send message to server
sendMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = { name: userName.value, message: message.value };
  socket.emit("sendMessage", data);
  message.value = "";
});

// Event: Receive and display new message
socket.on("newMessage", (obj) => {
  console.log(obj);
  const newMessage = obj.msg;
  const socketId = obj.socketId;
  const messageList = document.getElementById("message-list");
  const msg = document.createElement("div");
  const timestamp = new Date(newMessage.time);
  if (socketId == socket.id) {
    msg.innerHTML = `
        <div class="message-block-user">
            <img src="images/me.jpg" alt="pic">
            <div class="message-content" style="background-color: #6b63e1; color: white;">
                <span class="name" style="color:white;">${
                  newMessage.name
                }</span>
                <span class="timestamp">${timestamp.getHours()}:${timestamp.getMinutes()}</span>
                <div class="message">${newMessage.message}</div>
                
            </div>
        </div>`;
    messageList.appendChild(msg);
  } else {
    msg.innerHTML = `
        <div class="message-block">
            <img src="images/face.png" alt="pic">
            <div class="message-content">
                <span class="name">${newMessage.name}</span>
                <span class="timestamp">Sent ${timestamp.getHours()}:${timestamp.getMinutes()}</span>
                <div class="message">${newMessage.message}</div>
                
            </div>
        </div>`;
    messageList.appendChild(msg);
  }
  scrollToBottom();
});

// Scroll to bottom of message list
function scrollToBottom() {
  const messageList = document.getElementById("message-list");
  // Scroll the message container to the bottom
  messageList.scrollTop = messageList.scrollHeight;
}

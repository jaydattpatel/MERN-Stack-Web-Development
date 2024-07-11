/* 
author : Jaydatt Patel 

Create custom events and add Event Listeners to execute perticuler functions.

*/

// import 'events' module
const Events = require('events');

// extend class with Events.EventEmitter
class User extends Events.EventEmitter {

  createPost(content) {
    console.log('Post is created');
    //emit event type to execute event listeners.
    this.emit('postCreated');
  }
}

const user = new User()

// create function for execute when 'postCreated' event fire
function saveToDatabase() {
  console.log('Saving post to database')
}
// create function for execute when 'postCreated' event fire

function sendNotifications() {
  console.log('Sending Notifications')
}
// create function for execute when 'postCreated' event fire
function updateTimeline() {
  console.log('Updating timeline')
}

// add event listener for execute perticular function when 'postCreated' event fire or emit
user.addListener('postCreated', saveToDatabase);
user.addListener('postCreated', sendNotifications);
user.addListener('postCreated', updateTimeline);

user.createPost('This is my first post');
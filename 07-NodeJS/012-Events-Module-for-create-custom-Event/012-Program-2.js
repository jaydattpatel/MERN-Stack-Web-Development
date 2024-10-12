/* 
author : Jaydatt Patel 

Create custom events and add Event Listeners to execute perticuler functions.

*/

// import 'events' module
const events = require('events');

// extend class with Events.EventEmitter
class FitnessTracker extends events.EventEmitter {
    constructor() {
      super();
      this.progress = 0;
      this.goal = 1000;
    }
  
    addExercise(exercise) {
        this.progress += exercise.caloriesBurned;
        if (this.progress >= this.goal){
          //emit event type to execute event listeners.
          this.emit('goalReached');
        }
    }
  }
  
    
let tracker = new FitnessTracker();

tracker.addListener('goalReached',()=>{
    console.log("Congratulations! You have reached your fitness goal");
});


tracker.addExercise({ name: "Running", caloriesBurned: 500 });
tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
import { parentPort } from "worker_threads";

function performTask(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
    // console.log(i);
  }
}

// Listen for messages from the parent thread
parentPort.on("message", (arr) => {
  console.log(`Received from parent thread: ${arr}`);

  // Perform the task
  performTask(arr[1]);

  // Send the result back to the parent thread
  parentPort.postMessage(arr[0]);
});

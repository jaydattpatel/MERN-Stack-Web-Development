import { Worker, isMainThread, parentPort } from "node:worker_threads";

if (isMainThread) {
  const CPU_core = 10;
  for (let i = 0; i < CPU_core; i++) {
    // Create a new worker thread
    const worker = new Worker("./worker.js");
    // pass value to the worker thread
    worker.postMessage([
      `Thread-${i + 1}`,
      Math.ceil(Math.random() * 10) * 1000000000,
    ]);
    // Listen for messages from the worker thread
    worker.on("message", (result) => {
      console.log(`${result} is done.`);
      worker.terminate(); // Terminate the worker thread
    });
    // Handle errors in the worker thread
    worker.on("error", (err) => {
      console.error(`Worker error: ${err}`);
    });
  }
  console.log("waiting to complete....");
} else {
  // This code is executed in the as worker thread mode
  parentPort.on("message", (message) => {
    console.log(`Received message from Other thread: ${message}`);
    // Perform some task (in this case, just echoing the message)
    parentPort.postMessage(`Hello from worker! Received: ${message}`);
  });
}

//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;
let startBtn = document.querySelector("#start-btn");

let text = document.querySelector("#sentence");

let input = document.querySelector("#input");

let timerSec = document.querySelector("#timer");

let result = document.querySelector("#result");

let retryBtn = document.querySelector("#retry-btn");

let speed = document.querySelector("#speed");

let accuracy = document.querySelector("#accuracy");

let seconds = 0;
let minuts = 0;
let examTime = 30;

let timer;

startBtn.addEventListener("click", startTest);

function startTest() {
  input.disabled = false;
  input.focus();
  input.placeholder = "write above text...";
  text.textContent = sentences;
  startBtn.style.display = "none";

  seconds = examTime;
  minuts = 0;
  timerSec.innerText = `${minuts > 9 ? minuts : "0" + minuts}:${
    seconds > 9 ? seconds : "0" + seconds
  }`;

  timer = setInterval(() => {
    --seconds;
    timerSec.innerText = `${minuts > 9 ? minuts : "0" + minuts}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
    if (seconds == 0) {
      endTest();
    }
  }, 1000);
}

function endTest() {
  input.disabled = true;
  seconds = 0;
  minuts = 0;
  result.style.display = "block";
  calculate();
  clearInterval(timer);
}

retryBtn.addEventListener("click", () => {
  input.value = "";
  result.style.display = "none";
  startBtn.style.display = "inline-block";
  input.disabled = true;
});

function getWordsArray(str) {
  let tempStr = str.replaceAll("\n", " ").replaceAll("  ", " ").split(" ");
  tempStr = tempStr.filter((element) => {
    return !(element === "");
  });

  return tempStr;
}

function calculate() {
  let sentencesW = getWordsArray(sentences);
  let data = input.value;
  let totalW = getWordsArray(data);
  let correctW = totalW.filter((element) => {
    return sentencesW.includes(element);
  });

  speed.textContent = parseInt((correctW.length * 60) / examTime);

  let correctCharsCounts = 0;
  let len = data.length < sentences.length ? data.length : sentences.length;
  for (let i = len; i >= 0; i--) {
    if (data[i] == sentences[i]) {
      correctCharsCounts++;
    }
  }

  accuracy.textContent = ((correctCharsCounts * 100) / data.length).toFixed(2);

  console.log(totalW);
  console.log(correctW);
  console.log(correctCharsCounts);
}

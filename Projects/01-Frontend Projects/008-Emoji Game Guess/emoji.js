const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;
let timer;
//

//
const timerElement = document.getElementById("timer");
const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.innerHTML = emojiDetails[currentEmojiIndex].emoji;
  timerElement.textContent = `Time: ${seconds}s`;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong! \n Correct : " + correctEmoji;
  }
  console.log(score);
  scoreElement.textContent = `Score: ${score}`;
  nextEmoji();
}

function nextEmoji() {
  setTimeout(() => {
    currentEmojiIndex++;
    guessInput.value = "";
    guessInput.focus();
    resultElement.textContent = "";
    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score = 0;
    }
    displayEmoji();
  }, 1500);
}

document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    displayEmoji();
    startTimer();
  }, 2000);
});

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerElement.textContent = `Time: ${seconds}s`;

    if (seconds <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  document.getElementById("guess-input").disabled = true;
  timerElement.textContent = "";
}

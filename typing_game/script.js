const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");
const incorrectCounterElement = document.getElementById("incorrectCounter");

quoteInputElement.addEventListener("input", () => {
  //   console.log("changed");
  // Access to all characters in span
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");

  let incorrectCounter = 0;
  let isAllCorrect = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    //   When there is no input yet(textarea is empty)
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      isAllCorrect = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      incorrectCounter++;
      isAllCorrect = false;
    }
  });
  incorrectCounterElement.innerText = incorrectCounter;

  if (isAllCorrect === true) {
    renderNewQuote();
  }
});

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  //   console.log(quote);
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach(character => {
    const characterSpan = document.createElement("span");

    // characterSpan.classList.add("incorrect");
    characterSpan.innerText = character;
    //* appendChild: 特定の親要素の中に子要素を追加するためのメソッド
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
}

let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timerElement.innerText = getTimerTime();
  }, 1000);
}

// This function gives us the exact time in seconds
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();

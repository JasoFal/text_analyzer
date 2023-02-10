// Business Logic //
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.array.forEach(function(word) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase()))  {
      wordCount++
    }
  });
  return wordCount;
}

function removeBannedWords(word ,text) {
  const textArray = text.split(" ");
  let i = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes("zoinks") || element.toLowerCase().includes("muppeteer") || element.toLowerCase().includes("biffaroni") || element.toLowerCase().includes("loopdaloop")) {
      textArray.splice(i, 1, "******");
    }
  i++
});
return(textArray);
}

// UI Logic //

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  this.document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
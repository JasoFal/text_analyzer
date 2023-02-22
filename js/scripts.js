// Utility Logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic //
function wordCounter(arrayTextSplit) {
  if (isEmpty(word)) {
    return 0;
  }
  let wordCount = 0;
  arrayTextSplit();
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
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

function listOfAllIndividualWordsAndHowManyOccurrencesInText(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let textArray = text.split(" ");
  let map = {};
for (let i = 0; i < textArray.length; i++) {
    let textArrayItem = textArray[i];
    map[textArrayItem] = (map[textArrayItem] + 1) || 1;
  }
  return map;
}

// UI Logic //

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord; 
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-Passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
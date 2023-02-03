// Business Logic //

function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.array.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}
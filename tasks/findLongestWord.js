function longestWord(longString) {
  let allStrings = longString.split(" ");
  let longWord = "";
  for (let i = 0; i < allStrings.length ; i++) {
    if (allStrings[i].length > longWord.length) {
        longWord = allStrings[i];
    }
  }
  return longWord;
}
module.exports = {
  longestWord,
};

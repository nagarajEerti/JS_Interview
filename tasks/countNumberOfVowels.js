exports.countNumberOfVowels = (str) => {
  let chars = str.split("");
  let count = 0;
  let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "u", "U"];
  for (const char of chars) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

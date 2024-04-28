function palindrome(str) {
  let reversedString = str.split("").reverse().join("");
  return str == reversedString;
}

module.exports = {
  palindrome,
};

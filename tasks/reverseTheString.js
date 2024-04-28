function reverseTheString(str) {
  let reverseString = "";
  //method 1
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  //method 2
  reverseString = reverseString.split('').reverse().join('');
  return reverseString;
}

module.exports = { reverseTheString };
 
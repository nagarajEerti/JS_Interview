function anagram(param1, param2) {
  // let word1 = param1.split("");
  // let word2 = param2.split("");
  let word1 = param1.split("").sort().join("");
  let word2 = param2.split("").sort().join("");
  // let isAnagram;
  // for (let i = 0; i < word1.length; i++) {
  //   if (!word2.includes(word1[i])) {
  //     isAnagram = false;
  //   } else {
  //     isAnagram = true;
  //   }
  // }
  // return isAnagram;
  return word1 === word2;
}
module.exports = {
  anagram,
};

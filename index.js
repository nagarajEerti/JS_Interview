const express = require("express");
const app = express();
const {
  sumOfTen,
  reverseTheString,
  longestWord,
  palindrome,
  removeDuplicates,
  anagram,
  findLargestNum,
  primeOrNot,
  minAndMaxInArray,
} = require("./tasks/index");
const { countNumberOfVowels } = require("./tasks/countNumberOfVowels");
const { factorial } = require("./tasks/factorial");

// task 1
//  input = [7,3,8,2,5,6,4,1,9]
//  output = [ [ 7, 3 ], [ 8, 2 ], [ 5, 5 ], [ 6, 4 ], [ 1, 9 ] ]

// let result = sumOfTen([7,8,3,2,1,9,5,4,6]);
// console.log(result);

// let reversedString  = reverseTheString('Class');
// console.log(reversedString);

// let longString = longestWord('the amazing festival is ahead');
// console.log(longString);

// let palindromeOrNot  = palindrome('racecar');
// console.log(palindromeOrNot);

// let newSet = new Set([7,3,8,8,6,4,2,1,2,5,6,4,1,9]);
// console.log(removeDuplicates([7,3,8,8,6,4,2,1,2,5,6,4,1,9]),"new array",newSet);

// console.log(anagram("1289534567","7128953456"));

// console.log(countNumberOfVowels('All the ships are not marines'));

// console.log(findLargestNum([7,3,8,8,6,4,2,1,2,5,6,4,1,9,111]));

// console.log(factorial(6));

// console.log(primeOrNot(29));

// console.log(('  the ,       white spaces  ').replace(/\s/g,''));

// console.log(('  the ,       white spaces  ').replace(/\s/g,''));

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// let sum2 = a=>b=> b?  sum2(a+b):a;

// console.log(sum2(1)(2)(3)(4)());

// console.log(minAndMaxInArray([7, 3, 8, 8, 6, 4, 2, 1, 2, 5, 6, 4, 1, 9, 111]));

app.listen(9000, () => {
  console.log("server was started");
});

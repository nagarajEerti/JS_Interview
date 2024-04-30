const { findElementsSumTo10,
    countEachCharInString,
    getLength,
    numbersFirstAlphabetsSecond,
    reverseString,
    findTheMaximumNumber,
    factorialOfGivenNumber,
    fibonacciSequence,
    fibonacciSequenceWithRecursion,
    palindromeCheck,
    anagramDetection,
    bubbleSort,
    binarySearchWithSortedArray,
    removeDuplicates,
    findDuplicatesInArray,
    groupThePeopleWithAge,
    containsInSequence
} = require('./Algorithms');
// const translate = require('google-translate-api');
// const meet = require('./googlemeet');
// const test = require('./a1');
const express = require('express');
const app = express();
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
app.get('/api/hello', test.getMyName);
// app.get('/meet', meet.generateMeetLink)
app.listen(3000, () => {
    console.log("server running");
})
// async function createPdf() {
//     // Create a new PDFDocument
//     const pdfDoc = await PDFDocument.create();
//     const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Sample HTML to PDF</title>
//     </head>
//     <body>
//         <h1>Hello, World!</h1>
//         <p>This is a sample HTML document converted to PDF using pdf-lib.</p>
//     </body>
//     </html>
// `;
//     // Add a new page to the document
//     const page = pdfDoc.addPage([400, 600]);

//     // Draw some text on the page
//     page.drawText(htmlContent, {
//         x: 50,
//         y: 500,
//         size: 30,
//         color: rgb(0, 0, 0),
//     });

//     // Serialize the PDFDocument to bytes
//     const pdfBytes = await pdfDoc.save();

//     // Write the bytes to a file
//     fs.writeFileSync('example.pdf', pdfBytes);
// }

// createPdf().catch(err => console.log(err));


// console.log(findElementsSumTo10([2, 7, 6, 3, 8, 4, 1, 9]), "findElementsSumTo10");
// //task 2 
// console.log(countEachCharInString('nagaraju'), "countEachCharInString");
// // task 3 : Find the length of the longest substring without repeating characters
// console.log(getLength("abcdefghi"), "getLength");
// //task 4 :Restructure an array - First number, Second numbers
// console.log(numbersFirstAlphabetsSecond([2, "b", 4, "d", 3, "a", "c", "e", 5, 1]), "numbersFirstAlphabetsSecond");
// // 5: Reverse a String
// console.log(reverseString("nagaraju"), "reverseString");

// // 6: Find the Maximum Number ** Given an array of numbers, write a function to find the maximum number in the array.
// console.log(findTheMaximumNumber([9, 8, 7, 6, 5, 4, 3, 21, 111, 100]), "findTheMaximumNumber");

// //  7:Factorial Calculation Write a function to calculate the factorial of a given number using recursion.
// console.log(factorialOfGivenNumber(5), "factorialOfGivenNumber")

// //  8: Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a specified number of terms.
// console.log(fibonacciSequence(11), "fibonacciSequence")

// for (let i = 0; i < 11; i++) {
//     console.log(fibonacciSequenceWithRecursion(i), "fibonacciSequenceWithRecursion")
// }
// //  9:Palindrome Check:
// // Write a function to check if a given string is a palindrome (reads the same forwards and backward).
// console.log(palindromeCheck('raceCar'), 'palindromeCheck');

// //10: Anagram Detection:Create a function to check if two strings are anagrams of each other(pending)
// //(pending)
// console.log(anagramDetection("nagaraju", "ujaragan"), "anagramDetection")

// // Array Sorting:
// // Implement a sorting algorithm (e.g., bubble sort, merge sort, quicksort) to sort an array of numbers.
// console.log(bubbleSort([1, 9, 6, 3, 7, 5, 8,]), 'bubbleSort')

// // Binary Search:
// // Write a function to perform a binary search on a sorted array and return the index of a given element.
// console.log(binarySearchWithSortedArray([1, 9, 6, 3, 7, 5, 8,],3), "binarySearchWithSortedArray");

// // Remove Duplicates:
// // Given an array of numbers, write a function to remove duplicate values and return a new array without duplicates.
// console.log(removeDuplicates([1, 9, 6, 3, 7, 5, 8, 9, 5, 6, 3, 4, 6]), "removeDuplicates");
// //find duplicates in array 
// console.log(findDuplicatesInArray([1, 9, 6, 3, 7, 5, 8, 9, 5, 6, 3, 4, 6]), "findDuplicatesInArray")
// // We have group of people in the form of array and you have to group people basis upon age ?
// console.log(groupThePeopleWithAge([
//     { name: 'A', age: 10 },
//     { name: 'B', age: 17 },
//     { name: 'C', age: 14 },
//     { name: 'D', age: 10 },
// ]))
// // Three strings A, B, C are given. 
// // Check whether C contains all the characters of A and B and also in the same sequence as present in A and B.
const A = "abc";
const B = "123";
const C = "a1b2c3";
console.log(containsInSequence(A, B, C), "containsInSequence");
/*
Linked List Operations:
Implement basic operations for a singly linked list (e.g., insert at the beginning, delete a node, reverse the list).

Depth-First Search (DFS):
Write a function to perform a depth-first search on a graph or tree data structure.

Breadth-First Search (BFS):
Implement a breadth-first search algorithm for a graph or tree.

Two Sum Problem:
Given an array of numbers and a target sum,  find two numbers in the array that add up to the target sum.

Longest Common Subsequence:
Write a function to find the longest common subsequence of two strings.

Subset Sum Problem:
Given an array of numbers and a target sum, determine if there is a subset of the array that adds up to the target sum.

Knapsack Problem:
Implement the 0/1 Knapsack problem using dynamic programming.

Merge Intervals:
Given a collection of intervals, write a function to merge any overlapping intervals.

Find Missing Number:
Given an array of numbers from 1 to n with one number missing, find the missing number.

Rotate Array:
Write a function to rotate an array to the right by k steps.

Topological Sort:
Implement a topological sort algorithm for directed acyclic graphs (DAGs).


*/
module.exports = { app };
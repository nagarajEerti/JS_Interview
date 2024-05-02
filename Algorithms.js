function findElementsSumTo10(arr) {
    let ele = new Set();
    let result = [];
    arr.forEach(element => {
        let compliment = 10 - element;
        // if (ele.has(compliment)) {
        //     result.push([element, compliment]);
        // }
        // else {
        //     ele.add(element);
        // }
        ele.has(compliment) ? result.push([element, compliment]) : ele.add(element)
    });
    return result;
}
function countEachCharInString(str) {
    charCount = {};
    for (const chr of str) {
        if (!charCount[chr]) {
            charCount[chr] = 1;
        }
        else {
            charCount[chr]++;
        }
    }
    return charCount;
}
function getLength(s) {
    let finalLength = 0;

    for (var i = 0; i <= s.length; i++) {
        let currentString = new Set();
        for (var j = 0; j <= s.length; j++) {
            if (currentString.has(s[j])) {
                break;
            }
            else {
                currentString.add(s[j]);
            }
            finalLength = Math.max(finalLength, currentString.size);
        }
    }
    return finalLength;
}
function numbersFirstAlphabetsSecond(arr) {
    let numArray = [];
    let alphaArray = [];
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        typeof (arr[i]) == "string" ? alphaArray.push(arr[i]) : null;
        typeof (arr[i]) == "number" ? numArray.push(arr[i]) : null;
        finalArray = [...numArray, ...alphaArray];
    }
    return finalArray;
}
function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function findTheMaximumNumber(arr) {
    let maxNum = 0;
    // for (let i = 0; i < arr.length; i++) {

    //     for (let j = 0; j < arr.length; j++) {

    //         arr[j] > arr[i] ? maxNum = arr[j] : null;
    //     }
    // }
    for (let i = 0; i < arr.length; i++) {
        arr[i] > maxNum ? maxNum = arr[i] : null;
    }
    return maxNum;
}
function factorialOfGivenNumber(n) {
    if (n === 0) {
        return 1
    }
    return n * factorialOfGivenNumber(n - 1);
}
function fibonacciSequence(n) {
    let fibSeq = [0, 1];
    if (n == 0) return n;
    for (let i = 2; i <= n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq;
}
function fibonacciSequenceWithRecursion(n) {
    if (n <= 1) {
        return n
    }
    return fibonacciSequenceWithRecursion(n - 1) + fibonacciSequenceWithRecursion(n - 2);
}
function palindromeCheck(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    //nagarajuujaragan
    // for (let index = 0; index < Math.floor(cleanStr.length / 2); index++) {
    //     if (cleanStr[index] !== cleanStr[cleanStr.length - 1 - index]) {
    //         return false;
    //     }

    // }
    //another way
    let resultWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultWord += str[i]
    }
    return (resultWord == str) ? true : false;
    // return true;
}
function anagramDetection(str1, str2) {
    //need write 
}
function bubbleSort(arr) {
    // const n = arr.length;
    // //[1,9,6,3,7,5,8,]
    // // Outer loop for the number of passes
    // for (let i = 0; i < n - 1; i++) {
    //     // Inner loop for comparisons and swaps
    //     for (let j = 0; j < n - i - 1; j++) {
    //         // Compare adjacent elements
    //         if (arr[j] > arr[j + 1]) {
    //             // Swap arr[j] and arr[j+1]
    //             const temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {

            let temp = arr[i];
            if (arr[i] > arr[j]) {
                arr[i] = arr[j];
                arr[j] = temp
            }

        }
    }

    return arr;
}
function binarySearchWithSortedArray(arr, key) {
    arr = bubbleSort(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        console.log("in while")
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] == key) {
            return arr.indexOf(key);
        }
        else if (arr[middle] > key) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    //in case target not found ;
    return false;
}
function removeDuplicates(arr) {
    let newArr = [];
    let withIndexOf = [];
    // one line removing duplicates
    let withSet = [...new Set(arr)];
    //------------------------------
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });
    arr.forEach(element => {
        if (withIndexOf.indexOf(element) == -1) {
            withIndexOf.push(element)
        }
    });
    return { arr, withIncludes: newArr, withIndexOf, withSet }
}
function findDuplicatesInArray(array) {
    let duplicatesArray = [];
    let uniqueArray = [];
    for (let index = 0; index < array.length; index++) {
        if (!uniqueArray.includes(array[index])) {
            uniqueArray.push(array[index])
        }
        else {
            duplicatesArray.push(array[index]);
        }
    }
    return duplicatesArray;
}
function groupThePeopleWithAge(peoples) {
    let resultObj = {};
    for (let people of peoples) {
        if (resultObj[people.age]) {
            resultObj[people.age].push(people.name)
        }
        else {
            resultObj[people.age] = [people.name];
        }
    }
    return resultObj;
}
function containsInSequence(a, b, c) {
    let i = 0 //pointer of A
    let j = 0 //pointer of B
    for (const char of c) {
        if (i < a.length && char === a[i]) {
            i++;
        }
        if (j < b.length && char === b[j]) {
            j++;
        }
        if (i === a.length && j === b.length) return true;
    }
    return false;
}
function targetSum(total, array) {
    let nums = new Set();
    let combArray = [];
    for (let index = 0; index < array.length; index++) {
       
        if (nums.has(total - array[index])) {
            combArray.push([total - array[index], array[index]]);
        }
        else{
            nums.add(array[index]);
        }

    }
    return combArray;
}
module.exports = {
    findElementsSumTo10,
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
    containsInSequence,
    targetSum
}
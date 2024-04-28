exports.findLargestNum = (array) => {
  let largeNum = 0;
  array.forEach((element) => {
    if (element > largeNum) {
      largeNum = element;
    }
  });
  return largeNum;
};

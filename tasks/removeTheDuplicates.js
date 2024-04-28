function removeDuplicates(array) {
  let newArray = [];
  array.forEach((element) => {
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  });
  return newArray;
}

module.exports= {
    removeDuplicates
}
exports.minAndMaxInArray = (array) => {
  let min = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
    else  {
      min = array[i];
    }
  }
  return { min: min, max: max };
};

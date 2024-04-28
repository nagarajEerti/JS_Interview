function sumOfTen(array) {
  try {
     let numbers = new Set();
      let newArray =[];
     for (let i =0 ;i < array.length;i++){
        numbers.add(array[i]);
        let diff = 10 - array[i];
        if(numbers.has(diff)){
            newArray.push([diff,array[i]])
        }
     }
     return newArray;
  } catch (err) {
    console.log(err);
  }
}
module.exports = { sumOfTen };

const removeFromArray = function (arr, ...args) {
  // declare new array variable
  // search through array to find items equal to num
  // if item equal to num, do not add to new array, else add to new array
  // return new array
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i]) === false) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

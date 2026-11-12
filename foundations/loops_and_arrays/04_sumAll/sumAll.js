const sumAll = function (numOne, numTwo) {
  //   Check if parameters are positive integers
  if (
    Number.isInteger(numOne) !== true ||
    Number.isInteger(numTwo) !== true ||
    numOne < 0 ||
    numTwo < 0
  ) {
    return "ERROR";
  }

  //   Check to see which number is low vs high
  let minNum = 0;
  let maxNum = 0;
  if (numOne < numTwo) {
    minNum = numOne;
    maxNum = numTwo;
  } else {
    maxNum = numOne;
    minNum = numTwo;
  }

  //   Ensure there are numbers in between the min and max
  let arr = [];
  for (let i = minNum; i < maxNum; i++) {
    arr.push(i);
  }
  arr.push(maxNum);

  //   Sum all of the numbers in the array
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;

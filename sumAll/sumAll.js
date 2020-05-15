const sumAll = function(num1,num2) {
  let numList = [];
  let numSum = 0;
  let startNum;
  let endNum;
  //check if arg passed are positive integers; else "ERROR"
  if (num1 > 0 && num2 > 0 && typeof num1 == "number" && typeof num2 == "number") {
    //check which arg is greater, assigns startNum, endNum
    if (num1 < num2){
      startNum = num1;
      endNum = num2;
    } else {
      startNum = num2;
      endNum = num1;
    }
    //loop through range num1 through num2 and add to array;
    for (let i = startNum; i <= endNum; i += 1) {
      numList.push(i); //array [startnum - endNum], adding 1 each iteration]
    }
    for (let j = 0; j < numList.length; j++) {
      numSum += numList[j]; //adds each index in numList array to numSum(0 start)
    }
    return numSum;
   } else {
     return 'ERROR'
  }
}

module.exports = sumAll

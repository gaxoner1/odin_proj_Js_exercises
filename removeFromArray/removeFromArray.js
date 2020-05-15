const removeFromArray = function() {
  let uniqueNums = arguments[0];
  for (let i = 1; i < arguments.length; i++){
      let outsideNums = (arguments[i]);
      for (j = 0; j < uniqueNums.length; j++) {
        if (uniqueNums[j] === outsideNums){
          uniqueNums.splice(j,1);
        }
      }
    }
    return uniqueNums;
  }


module.exports = removeFromArray

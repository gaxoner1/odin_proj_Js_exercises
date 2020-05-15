const leapYears = function(yr) {
  //check if divible by 4; else false
  if (yr%4 == 0) {
    // check if divisible by 400: true or check if divisibe by 100;
    if (yr%400 == 0) {
      return true;
      //if not divisible by 400, check divisible by 100;
    } else if (yr % 100 !== 0 ){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}


/*
//alt option:
let leapYears = function(yr) {
//true if is divisibe by 4 AND (not divisibe by 100 OR is divisibe by 400;
  return yr % 4 === 0 && ( yr % 100 !== 0 || yr % 400 == 0)
}
*/


module.exports = leapYears

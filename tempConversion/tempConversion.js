const ftoc = function(farDegrees) {
  celTemp= ((farDegrees - 32) * (5/9)); // F to C formula
  roundCel = celTemp.toFixed(1); // returns string rounded to one decimal place
  integerCel = Number(roundCel); // converts string to int.
  return integerCel;
}

const ctof = function(celDegrees) {
  farTemp = ((celDegrees * (9/5)) + 32); // C to F formula
  roundFar = farTemp.toFixed(1); // returns string rounded to one decimal place
  integerFar = Number(roundFar); // converts string to int.
  return integerFar;
}

module.exports = {
  ftoc,
  ctof
}

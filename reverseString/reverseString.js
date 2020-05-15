const reverseString = function(string) {
  let stringToList = string.split("");//converts to array w/ comma seperated ex. [a, b, c]
  let revStringToList = stringToList.reverse(); // reverses array [c, b, a]
  return revStringToList.join(""); //concatenates charact back to string "cba"
}

module.exports = reverseString

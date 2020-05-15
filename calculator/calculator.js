function add (num1, num2) {
	added = num1 + num2;
	return added;
}

function subtract (num1, num2) {
	diff = num1 - num2;
	return diff;
}

function sum (array) {
	listSum = 0; //blank variable that will be added to.
	for (i = 0; i < array.length; i++){
		listSum += array[i]; //iterate through array then add to listSum
	}
	return listSum;
}

function multiply (array) {
	listMultiplied = 1; //blank variable, starts at 1; (x * 1 = x),
	for (i = 0; i < array.length; i++) {
		listMultiplied *= array[i]; //iterate through array, then times each index.
	}
	return listMultiplied;
}

function power(num1, toPower) {
	return num1 ** toPower;
}

function factorial(num) {
	factList = [];
	factList.push(num); // start array factList w/ value of num
	factorialofNum = 1;
	if (num < 1) {
		return factorialofNum; // if 0; return 0! == 1;
	} else {
			while (num > 1) {
				num = (num - 1)
				factList.push(num); // add Num - 1 into array factList; loop until 1.
		}
	}

/* loop through factList array to muliply each,
			starting at 1 (value of factorialofNum) */

	for (i = 0; i < factList.length; i++){
		factorialofNum *= factList[i]; // multiply each element of factlist
	}
	return factorialofNum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

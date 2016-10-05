/*
	Write a program to calculate factorial using recursive strategy.
*/

var factorial = function(n) {

	if(n == 0) {
		return 1;
	}
	else {
		return n * factorial(n - 1);
	}
}

//console.log('Factorial of 5 is: '+factorial(5));


/*
	Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) 
	of each student object in its prototype.
*/


//Class declaration in Javascript and below class expression is global.
var Student = class {
  constructor(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
};

var sutd1 = new Student('Harry','Johnson',27);
var sutd2 = new Student('John','Carter',28);


Student.prototype.printName = function() {
 	return 'Student Name Is: '+this.firstName+' '+this.lastName;
}

console.log(sutd1.printName());
console.log(sutd2.printName());



/*
	Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
*/

function convertUnixToUTC(timstmp) {	

	//Since, toUTCString function requires timestamp in milleseconds thats why we if multiple timestamp into 1000 
	var d = new Date(Math.round(timstmp * 1000));
	return d.toUTCString();
}

//console.log('UTC converted value==> '+convertUnixToUTC(1382086394000));


function arrayExplodingPlay(pArray) {
 	

	//console.log(pArray.length);

 	var count = pArray.length;
 	var firstArray	= [];
 	var secondArray	= [];
 
 	for ( i = 0; i < count; i++ ) {	

 		var firstDigit	= Math.floor(pArray[i] / 10);
		var secondDigit	= pArray[i] % 10;

 		firstArray.push(firstDigit);
 		secondArray.push(secondDigit); 
 	}
 
 	return [ firstArray, secondArray ]; 
 }
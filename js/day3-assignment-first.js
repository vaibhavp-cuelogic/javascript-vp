/*
	[Program :: 1 ] 
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
	[Program :: 2 ] 
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
	[Program :: 3]
	Write a program that will do the following:

    1. Accept two string values as arguments, where first value will be a long word(can be any random characters as well), 
       second string will be a single character or substring that will already exist in the first value.

    2. The function should then return an object with properties - 
       'count' which will count the no of occurrences of substring in the first value, 
       'lastIndex' which will return the index of last occurrence of the substring in the first value.
       return -1 if the substring can't be found.
*/

	function substrOccurance(str,substr) {

		if((str!= '') && (substr!= '')) 
		{
			//If str = "This is world."
			//and substr = "is".

			var objOutPut = {};
			var stringToGoIntoTheRegex = substr;
			var regex = new RegExp(stringToGoIntoTheRegex, "g");
			// at this point, the line above is the same as: var regex = /is/g;

			var input = str;
			var occuranceCount = (input.match(regex) || []).length;
			var lstIndxOcurs = input.lastIndexOf(stringToGoIntoTheRegex);

			if(lstIndxOcurs!== -1) {
				//Send Object as o/p.
				objOutPut.count = occuranceCount;
				objOutPut.lastIndex = lstIndxOcurs;

				return objOutPut;
			} 
			else 
			{
				//Send -1 as o/p.
				return lstIndxOcurs;
			}
		}
		else 
		{
			alert('Kindly pass both the paramters.');
		}	
	}


	
/*
	[Program :: 4 ]
	 Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
*/

function convertUnixToUTC(timstmp) {	

	//Since, toUTCString function requires timestamp in milleseconds thats why we if multiple timestamp into 1000 
	var d = new Date(Math.round(timstmp * 1000));
	return d.toUTCString();
}

//console.log('UTC converted value==> '+convertUnixToUTC(1382086394000));




/*
	[Program :: 5 ]
	Write a function that will accept a single dimensional array whose value 
	will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array 
	like the following:
    [
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible.
*/

function convert1DTo2DArray(paraArray) {
 	

	//console.log(paraArray.length);

 	var count = paraArray.length;
 	var arrFirst = [];
 	var arrSecond = [];
 
 	for (i=0; i < count; i++) {	

 		/* 
 			Ex. suppose first occurance elemnt will be '00', then below function make it as 0 as 00/10=0.0 and floor make it 0
			Similarly for next value let suppose will be '10', then below function make it as 1 as 10/10=1.0 and floor make it 1
 		*/
			var firstOccrance = Math.floor(paraArray[i] / 10); 

		/* 
 			Ex. suppose first occurance elemnt will be '00', then below function make it as 1 as 00 % 10= Reminder will be 1.
			Similarly for next value let suppose will be '10', then below function make it as 0 as 10 % 10= Reminder will be 0.
 		*/	
			var secondOccrance = paraArray[i] % 10;

 		arrFirst.push(firstOccrance);
 		arrSecond.push(secondOccrance); 
 	}
 
 	return [arrFirst,arrSecond]; 
 }



 /* 
	[Program :: 6]
	Write a program to do the following:
    1. Create an array and add numbers 1 to 100 in it
    2. Print each element of that array in a new line WITHOUT using any loop structure.
 */


function printArrayElementWithoutLoopStruct() {

	var resultArr = [];
	var a;
	for(a=1; a<=100; a++) {
		resultArr.push(a);
	}
	
	console.log(resultArr.join('\n'));
}

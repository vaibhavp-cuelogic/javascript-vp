

/***** [START :: Oject Declaration Type] *****/

//Object type varaible declaration first.

var obj1 = {
			 'firstName': 'Sofia', 
			 'lastName': 'Jonson'
		   }; 


//Object type varaible declaration Second.

var obj2 = new Object();
obj2.firstName = 'Harry';
obj2.lastName = 'Clark';


//Oject Type Varaible Declaration Third [Using Prototype]

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

var personFirst = new Person("Hancy", "Pipl");
var personSecond = new Person("Jack", "Sparo");


document.getElementById("demo1").innerHTML =
"Type 1 using {} : Person Full Name Is: " + obj1.firstName + " "+obj1.lastName;

document.getElementById("demo2").innerHTML =
"Type 2 using new operator :  Person Full Name Is: " + obj2.firstName + " "+obj2.lastName;

document.getElementById("demo3").innerHTML =
" Type 3 using prototype way: Person First Full Name Is: " + personFirst.firstName + " "+personFirst.lastName + ". Person Second Full Name Is: " + personSecond.firstName + " "+ personSecond.lastName;

/***** [END :: Oject Declaration Type] *****/




/***** [START :: Array Declaration Type] *****/

//Array Type Declaration One:
var arr1 = ['AngularJs','NodeJs','BackboneJs','RecietJs']

//Array Type Declaration Second:
var arr2 = new Array('Apple','Orange','Mango');

var arr3 = ['php','java'];



document.getElementById("demoArr1").innerHTML =
"Array Type 1 Using []: "+arr1.toString();

document.getElementById("demoArr2").innerHTML =
"Array Type 2 Using new : "+arr2.toString();





/***** [END :: Array Declaration Type] *****/
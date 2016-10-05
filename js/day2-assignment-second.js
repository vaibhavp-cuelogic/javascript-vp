
/* 
	Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible 
    from new objects created.

*/


// Class declaration in Javascript and below class expression is global.

var Student = class {
  constructor(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
};

var sutd1 = new Student('Harry','Johnson',27);
var sutd2 = new Student('John','Carter',28);


Student.prototype.getStudentInfo = function() {
 	return 'First Name: '+this.firstName+' Last Name: '+this.lastName+' Age:'+this.age;
}

console.log('Student 1 Info==> First Name:'+sutd1.firstName+' Last Name:'+sutd1.lastName+' Age:'+sutd1.age);
console.log('Student 2 Info==> First Name:'+sutd2.firstName+' Last Name:'+sutd2.lastName+' Age:'+sutd2.age);
console.log(sutd1.getStudentInfo());
console.log(sutd2.getStudentInfo());
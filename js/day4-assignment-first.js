
/* 
   [Program :: 1]
   Write a program to copy two objects. It should accept two arguments - 
   source ( the object from which we need to copy) and target ( to which we need to copy). 
   The target object will initially be empty.
*/


function copyTwoObject(objSourc,objTarget) {

	objSourc = (typeof(objSourc) !== 'object')? {} : objSourc;
	objTarget = {};

	//JSON.stringify(), converts javascript object into JSON string.
	//JSON.parse(), converts JSON string into javascript object.

	objTarget = JSON.parse(JSON.stringify(objSourc));
	//obj2.name = "Sofia";

	console.log(objSourc);
	console.log(objTarget);
}



/* 
   [Program :: 2]
   Write a program to merge two objects. It should accept two arguments - 
   objectA and objectB. The result object will have the combined values and should not change 
   the structure of either objectA or objectB. If both objects have same properties, 
   consider using objectA property instead.
*/


function mergingTwoObject(obj,src) {

	for (var key in src) {	

			//hasOwnProperty() checks is perticular passed key value exsists in given object or not,
			//If found returns true otherwise returns false.

	       if (src.hasOwnProperty(key)) 
	       {	
	       		//Below if condition checks if obj2's key not found in obj1's key then and only then,
	       		//Copy value from obj2[key] into obj1[key] otherwise if key found then insted it copy from obj2,
	       		//Copy it from obj1 to itself.

	       		if(!(obj.hasOwnProperty(key))
)				{
					obj[key] = src[key];
				}
				else 
				{
					obj[key] = obj[key];	
				}

		   }
	    }
	    return obj;
	}
	
	//example:
	var a = { foo: 'a', test: 'b' }, b = { foo:'z', bar: 'c', test: 'x', res:'d'};
	var c = mergingTwoObject(a, b);
	
	console.log(c);


/* 
 	[Program :: 3]
 	Extend number type to have a 'float()' function that will convert any given 'integer' 
 	value to its float equivalent. (a no such as 5 should become 5.00) The function should only return 
 	that value and should not affect the actual number's value.
*/


	Number.prototype.float = function() {

		return this.valueOf().toFixed(2);
	}


/* 
 	[Program :: 4]
 	Extend number type to have a 'int()' function that will convert any given 'float' value to its integer 
 	equivalent. (a no such as 5.00 should become 5). The function should only return that value and 
 	should not affect the actual number's value.
*/
	
	Number.prototype.int = function() {

		return Math.round(this.valueOf());
	}


/* 
	[Program :: 5]
	Write a program to loop through the children of a ul element(ul will have 5 li's). 
	Loop through each of the li and attach a function on it that will alert the value of 
	that li (html text inside the li). 
*/


var idxOfLi = document.getElementsByTagName("li");
var countOfLi = idxOfLi.length;
var i;

for(i= 0; i< countOfLi; i++) {
	
	idxOfLi[i].addEventListener("click", function(){
    	 alert(this.innerText);
	});	
} 


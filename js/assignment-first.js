
//document.addEventListener("DOMContentLoaded", function(event) { 
  
/* Start Varailbe Declaraion Code  */	

 var int = 123; //Integer or Number type varaible declaration.
 var str = "Hello World.";	//String type varaible declaration.
 var arr = ['angularjs','nodejs','responsejs'];	//Array type varaible declaration.
 var obj = {'first name': 'Sofia', 'last name': 'Jonson'}; //Object type varaible declaration.
 var bol = true;
 var indexes = [];
 var inputStr = '';

 document.getElementById("id-int").innerHTML = "var int is Integer type which holds value 123.";
 document.getElementById("id-str").innerHTML = "var str is String type which holds value 'Hello World'.";
 document.getElementById("id-arr").innerHTML = "var arr is Array type which holds value "+ arr.toString();
 document.getElementById("id-obj").innerHTML = "var obj is Object type which holds value {'first name': 'Sofia', 'last name': 'Jonson'}";
 document.getElementById("id-bol").innerHTML = "var bol is Boolean type which holds value true";

/* End Varailbe Declaraion Code  */	


/* Start Array Function And Operation  */	

document.getElementById("id-ex-arr").innerHTML = arr.toString();


/* Start Function which add the element into exsisting array */

document.getElementById("id-add-vl").onclick = function() {
  

	var inputVal = document.getElementById("add-arr-value").value;	
		
		if(inputVal!= "")
		{	
			var i;
			var str= '';
			arr.push(inputVal);
			
 			str += '<ul>';
			for(i=0; i < arr.length; i++)
			{	
				//console.log('i='+i + '======'+arr[i]);

			  if (!indexes[i]) {	
			  	
			  	indexes[i] = true;
				str += '<li id="li'+i+'">'+ arr[i]+' <span><a href="javascript:void(0);" id="rm-ele'+i+'" onclick="removeElement('+ i +')" >Remove</a></span></li>';	
				

			  }	
			}

			str += '</ul>';

			indexes = [];

			document.getElementById("add-arr-value").value = "";

			document.getElementById("id-aft-arr").innerHTML = str;
	
			document.getElementById("arr-result").style.display= 'block';		
		}
		else 
		{
			alert('Please enter value');	
		}

};

/* End Function which add the element into exsisting array */



/* End Array Function And Operation  */	

//});



/* Start Function Which Toogle the value of boolean variable */

document.getElementById("id-toogle").onclick = function() {	

	document.getElementById("id-hdn-bol-msg").style.display= 'block';

	if(bol) {	
		bol = false;
		document.getElementById("bol-spn").innerHTML = 'false';	
	}
	else 
	{
		bol = true;
		document.getElementById("bol-spn").innerHTML = 'true';		
	}
	
}


/* End Function Which Toogle the value of boolean variable */




/* Start Concatinating String Values */


document.getElementById("id-concat-vl").onclick = function() {	

	document.getElementById("concat-result").style.display= 'block';

	inputStr += document.getElementById("add-concat-value").value;	
	
	document.getElementById("add-concat-value").value = "";

	document.getElementById("id-aft-concat").innerHTML = inputStr;		
}


/* End Concatinating String Values */





/* Start Function which removes the element from exsisting array */

function removeElement(index) {	


   document.getElementById('li' + index).remove();
   //document.getElementById('rm-ele' + index).remove();

   arr.splice(index,1);


   // mark index as not used
   indexes[index] = false;
}


/* End Function which removes the element from exsisting array */

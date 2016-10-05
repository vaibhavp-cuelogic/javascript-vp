/* 
	Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in when 
    invoking the functions) The function should accept at least 2 variables and throw error if less then 2 are passed. 
    The function should also validate the type of argument passed in
*/
	
	var i;
	var result1 = 0;
	var invalidResultArr = [];

	function doOperation(operator,oprand1,operand2) {

		if((arguments.length < 3) || (arguments.length > 3)) {
			
			alert('function arguments must be 3 from which first paramter will be operation to perform and other two are numbers on which operation performs.');
		}
		else 
		{

			switch(operator.toLowerCase()) {
    			case "add":
        			return oprand1 + operand2;
        			break;
    			case "subtract":
        			return oprand1 - operand2;
        			break;
    			case "multiply":
    					if((oprand1 == 0) || (operand2 == 0)) {
    						return 0;
    					}
    					else 
    					{
        					return oprand1 * operand2;
        				}
        			break;
        		case "divide":
        				if((oprand1 == 0) || (operand2 == 0)) {
    						return 0;
    					}
    					else 
    					{
        					return oprand1 / operand2;
        				}
        			
        			break;	
    			default:
        			return "Invalid Operation operation must be any one from 'add','subtract','multiply', 'divide'";
			}

		}

	}


	function doOperationDynamic(operation,operands) {

		b.apply(this,arguments);
	}

	function b(args) {

		if (arguments.length >= 3) {

			switch(arguments[0].toLowerCase()) {
    			case "add":
    				for(i=1; i<= arguments.length-1; i++) {
        				
        				if(typeof(arguments[i])=== 'number') 
        				{
        					result1 += arguments[i];
        				}
        				else 
        				{
        					
        					invalidResultArr.push(arguments[i]);
        				}
        			}

        			if(invalidResultArr.length > 0) {

        				alert('Parameters '+invalidResultArr.toString()+' not an number.');
        			}
        			else 
        			{
        				alert(result1);
        			}

        			invalidResultArr = [];
        			result1 = 0;
        			break;

    			case "subtract":

    				for(i=1; i<= arguments.length-1; i++) {
        				
    					if(typeof(arguments[i])=== 'number') 
        				{

        					if(result1 == 0) {
        						result1 = arguments[i];
        					}
        					else 
        					{
        						result1 -= arguments[i];	
        					}
        				}
        				else 
        				{
        					
        					invalidResultArr.push(arguments[i]);
        				}	
        			}
        			if(invalidResultArr.length > 0) {

        				alert('Parameters '+invalidResultArr.toString()+' not an number.');
        			}
        			else 
        			{
        				alert(result1);
        			}

        			invalidResultArr = [];
        			result1 = 0;
        			break;

    			case "multiply":

        			for(i=1; i<= arguments.length-1; i++) {
        				
    					if(typeof(arguments[i])=== 'number') 
        				{	
        					if(arguments[i] == 0) {
        						result1 = 0;
        						break;
        					}
        					else 
        					{

        						if(result1 == 0) {
        							result1 = arguments[i];
        						}
        						else 
        						{
        							result1 *= arguments[i];	
        						}
        				  	}
        				}
        				else 
        				{
        					
        					invalidResultArr.push(arguments[i]);
        				}	
        			}
        			if(invalidResultArr.length > 0) {

        				alert('Parameters '+invalidResultArr.toString()+' not an number.');
        			}
        			else 
        			{
        				alert(result1);
        			}

        			invalidResultArr = [];
        			result1 = 0;
        			break;

        		case "divide":

        			for(i=1; i<= arguments.length-1; i++) {
        				
    					if(typeof(arguments[i])=== 'number') 
        				{

        					if(arguments[i] == 0) {
        						result1 = 0;
        						break;
        					}
        					else 
        					{

        						if(result1 == 0) {
        							result1 = arguments[i];
        						}
        						else 
        						{
        							result1 /= arguments[i];	
        						}
        					}	
        				}
        				else 
        				{
        					
        					invalidResultArr.push(arguments[i]);
        				}	
        			}
        			if(invalidResultArr.length > 0) {

        				alert('Parameters '+invalidResultArr.toString()+' not an number.');
        			}
        			else 
        			{
        				alert(result1);
        			}

        			invalidResultArr = [];
        			result1 = 0;
        			break;	

    			default:
        			return "Invalid Operation operation must be any one from 'add','subtract','multiply', 'divide'";
			}
		}	 		
		else 
		{
		  alert('function arguments less than three not allowed');
		}	
		
	}


	//var result = doOperation('add',5,5);

	//var oprRes = doOperationDynamic('add',5,5);

	//console.log(oprRes);
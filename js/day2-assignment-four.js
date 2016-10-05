/*
	Write a program that will print number from 1 to 100 using 
	all the variants of a loop structure(for,while,do while etc).
 */

 
 var i;
 var j=1;
 var k=1;

 //Using for loop:
 document.writeln('Using For Loop:');
 document.write("<br />");

 for(i=1; i<=100;i++) {
	document.writeln(i);
 }

document.write("<br /><br />");

//Using while loop:
document.writeln('Using while Loop:');
document.write("<br />");

 while(j <= 100) {

 	document.writeln(j);
 	j++;	
 }

document.write("<br /><br />");

 //Using do while loop:
 document.writeln('Using do while Loop:'); 
 document.write("<br />");

do {
    document.writeln(k);
    k++;
}
while (k <= 100);
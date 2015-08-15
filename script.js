var number = prompt("Enter a Whole Number!");
if (isNaN(number)) {
	alert("I said a number...");
}	
else if (number %1 != 0){
	alert("I said a WHOLE number...")
}
else {
	fizzbuzz(number);
}

function fizzbuzz(number) {
	for (var i = 1; i <= number; i++) 
	{
		if (i % 15 ===0)
			document.write("FizzBuzz <br>");
		else if (i % 5 === 0)
			document.write("Buzz <br>");
		else if (i % 3 ===0)
			document.write("Fizz <br>");
		else 
			document.write(i +"<br>");
	}
}
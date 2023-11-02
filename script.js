const isPowerOfTwo = (number) => {
  //your code here
	if(!isNaN(number))
	{ 
	return number > 0 && (number & (number - 1)) === 0;
	
	}
	else{
		return false; 
	}
}

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));  


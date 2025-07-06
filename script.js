function makeid(l) {
  // write your code here
	let str = "";

	while(str.length < l){
		str += Math.random().toString(36).substring(2);
	}

	return str.substring(0,l);
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

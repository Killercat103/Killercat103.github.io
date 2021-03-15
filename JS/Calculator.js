// Declares all variables.

var answer = 0;
var written = 0;
var method = "none";
var calcnumber = 0;
var firstnumber = 0;
var reset = 0;
var memory = 0;

// Clears everything (Except memory).

function clearall() {
	written = 0;
	answer = 0;
	calcnumber = 0;
	firstnumber = 0;
	reset = 0;
	method = "none";
	document.getElementById("calcdisplay").innerHTML = written;
}

// Clears text in dsiplay. Nothing more.

function clearentry() {
	written = 0;
	document.getElementById("calcdisplay").innerHTML = written;
}


// Finds what calculating method user clicked and does the rest of the math.

function equation() {
	if (method == "add") {
		written = parseFloat(written);
		answer = firstnumber + written;
		written = 0;
		firstnumber = 0;
		document.getElementById("calcdisplay").innerHTML = answer;
		reset = 1;
	} else if (method == "subtract") {
		written = parseFloat(written);
		answer = firstnumber - written;
		written = 0;
		firstnumber = 0;
		document.getElementById("calcdisplay").innerHTML = answer;
		reset = 1;
	} else if (method == "multiply") {
		written = parseFloat(written);
		answer = firstnumber * written;
		written = 0;
		firstnumber = 0;
		document.getElementById("calcdisplay").innerHTML = answer;
		reset = 1;
	} else if (method == "divide") {
		written = parseFloat(written);
		answer = firstnumber / written;
		written = 0;
		firstnumber = 0;
		document.getElementById("calcdisplay").innerHTML = answer;
		reset = 1;
	} else {
		document.getElementById("calcdisplay").innerHTML = answer;
	}
}


// Saves text in display.

function save() {
	if (reset == 1) {
		firstnumber = answer;
		document.getElementById("calcdisplay").innerHTML = written;
		reset = 0;
	} else {
		firstnumber = written;
		firstnumber = parseFloat(firstnumber);
		written = 0;
		document.getElementById("calcdisplay").innerHTML = written;
	}
}


// Saves numbers and displays them

function number() {
	if (written == "0") {
		written = calcnumber;
	} else {
		written = written + calcnumber;
	}
	document.getElementById("calcdisplay").innerHTML = written;
}

// Memory functions.

function memoryview() {
	written = memory;
	document.getElementById("calcdisplay").innerHTML = written;
}

function memoryadd() {
	if (memory == 0) {
		memory = written;
		memory = parseFloat(memory);
	} else {
		written = parseFloat(written);
		memory = memory + written;
		memory = parseFloat(memory);
	}
}

function memorysubtract() {
	if (memory == 0) {
		memory = written;
		memory = memory * -1;
	} else {
		memory = memory - written;
		parseFloat(memory);
	}
}

function memoryclear() {
	memory = 0;
}
// Methods for calculating numbers.

function add() {
	method = "add";
	save();
}

function subtract() {
	method = "subtract";
	save();
}

function multiply() {
	method = "multiply";
	save();
}

function divide() {
	method = "divide";
	save();
}


// Methods for calculating numbers.

function add() {
	method = "add";
	save();
}

function subtract() {
	method = "subtract";
	save();
}

function multiply() {
	method = "multiply";
	save();
}

function divide() {
	method = "divide";
	save();
}


// Number entered on the calculator
function one() {
	calcnumber = "1";
	number();
}

function two() {
	calcnumber = "2";
	number();
}

function three() {
	calcnumber = "3";
	number();
}

function four() {
	calcnumber = "4";
	number();
}

function five() {
	calcnumber = "5";
	number();
}

function six() {
	calcnumber = "6";
	number();
}

function seven() {
	calcnumber = "7";
	number();
}

function eight() {
	calcnumber = "8";
	number();
}

function nine() {
	calcnumber = "9";
	number();
}

function dot() {
	if (written == 0) {
		written = "0.";
		document.getElementById("calcdisplay").innerHTML = written;
	} else {
		written = written + ".";
		document.getElementById("calcdisplay").innerHTML = written;
	}
}

function negative() {
	written = written * -1;
	document.getElementById("calcdisplay").innerHTML = written;
}

function zero() {
	if (written != "0")
		written = written + "0";
		document.getElementById("calcdisplay").innerHTML = written;
}

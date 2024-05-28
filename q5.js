function calculateSum() {
	const input = document.getElementById("numbers").value;
	const numbers = input.split(",").map(Number);
	const sum = numbers.filter(number => number > 0).reduce((a, b) => a + b, 0);
	document.getElementById("result").innerHTML = "Sum of positive numbers: " + sum;
}

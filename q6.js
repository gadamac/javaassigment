function calculateMeanAndMedian() {
	const input = document.getElementById("numbers").value;
	const numbers = input.split(",").map(Number).filter(Number);
	const sum = numbers.reduce((acc, current) => acc + current, 0);
	const mean = sum / numbers.length;
	numbers.sort((a, b) => a - b);
	const median = numbers.length % 2 === 0 ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2 : numbers[Math.floor(numbers.length / 2)];
	document.getElementById("result").innerHTML = `Mean: ${mean}<br>Median: ${median}`;
}

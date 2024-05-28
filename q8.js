const input = document.getElementById("ages").value;
	const ages = input.split(",").map(Number).filter(Number);
	const oldest = Math.max(...ages);
	const youngest = Math.min(...ages);
	const ageDifference = oldest - youngest;
	document.getElementById("final").innerHTML = `Oldest: ${oldest}<br>Youngest: ${youngest}<br>Age Difference: ${ageDifference}`;
}

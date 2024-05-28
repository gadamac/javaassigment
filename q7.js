function abbreviate() {
	const name = document.getElementById("name").value;
	const initials = name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
	document.getElementById("result").innerHTML = initials;
}

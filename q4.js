let numbers = [1, 2, 3, 4, 5];
document.getElementById("single").innerHTML = "number " + numbers;
let doubles = numbers.map(number => number*number);
document.getElementById("doubles").innerHTML = "square: " + doubles;
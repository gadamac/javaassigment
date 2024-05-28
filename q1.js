let numbers = [1, 2, 3, 4, 5];
document.getElementById("single").innerHTML = "sinlge array " + numbers;
let doubles = numbers.map(number => number * 2);
document.getElementById("doubles").innerHTML = "Doubles: " + doubles;

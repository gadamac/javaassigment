let numbers = ["awais", "ali","hamza", "safiullah", "fatmia"];

let doubles = numbers.map(number => {
    let first = number.charAt(0).toUpperCase();
    let remove = number.slice(1).toLowerCase();
    return first + remove;
    
});

document.getElementById("doubles").innerHTML = doubles;

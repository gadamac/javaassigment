let arr3=[5 ,6 ,8 ,10]
document.getElementById("main").innerText="orginal array>> " +arr3;
let arr4=arr3.map(arr => arr3.toString());
document.getElementById("display").innerHTML = arr4;
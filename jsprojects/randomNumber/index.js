const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const but = document.getElementById("but");



const max = 1;
const min = 100;
but.onclick = function(){
    let x = Math.floor(Math.random() * (max - min)) + min;
    let y = Math.floor(Math.random() * (max - min)) + min;
    let z = Math.floor(Math.random() * (max - min)) + min;

    n1.textContent = x;
    n2.textContent = y;
    n3.textContent = z;


}

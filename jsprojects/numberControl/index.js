const dec = document.getElementById("b1");
const res = document.getElementById("b2");
const inc = document.getElementById("b3");
const countLab = document.getElementById("count");
let x = 0;

dec.onclick = function(){
    x--;
    countLab.textContent = x;
}
res.onclick = function(){
    x = 0;
    countLab.textContent = x;
}
inc.onclick = function(){
    x++;
    countLab.textContent = x;
}

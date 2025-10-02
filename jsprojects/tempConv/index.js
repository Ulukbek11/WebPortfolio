const textBox = document.getElementById("textBox");
const toCel = document.getElementById("toCelsius");
const toFar = document.getElementById("toFarenheit");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toFar.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "F";
    }
    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp + "C";
    }
    else{
        result.textContent = "Select a unit";
    }
}

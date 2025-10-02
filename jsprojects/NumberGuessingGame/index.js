const number = Math.floor(Math.random() *99) +1;
console.log(number);
let isRunning = true;
let x = window.prompt("guess a number between 1 and 100");

while(isRunning){
    switch(true){
        case x > number:
            x = window.prompt("LOWER");
            break;
        case x < number:
            x = window.prompt("BIGGER");
            break;
        case x == number:
            window.prompt("YOU WON");
            isRunning = false;
            break;
        default:
            x = window.prompt("ITS NOT A NUMBER");
            break;
    }
}
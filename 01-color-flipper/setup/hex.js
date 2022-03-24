const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function randomNumber(min, max){
    let r = Math.random()*(max-min) + min;
    r = Math.floor(r);
    let hexRand=hex[r];
    return hexRand;
}

btn.addEventListener("click",function(){
    
        let one = randomNumber(0,hex.length);
        let two = randomNumber(0,hex.length);
        let three = randomNumber(0,hex.length);
        let four = randomNumber(0,hex.length);
        let five = randomNumber(0,hex.length);
        let six = randomNumber(0,hex.length);
        



        let r='#'+one+two+three+four+five+six;
        document.body.style.backgroundColor=r;
        color.textContent=r;
});
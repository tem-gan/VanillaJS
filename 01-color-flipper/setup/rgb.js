
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function randomNumber(min, max){
    let r = Math.random()*(max-min) + min;
    r = Math.floor(r);
    return r;
}

btn.addEventListener("click",function(){
        let one = randomNumber(0,255);
        let two = randomNumber(0,255);
        let three = randomNumber(0,255);

        let rgbCode = "rgb("+one+","+two+","+three+")";
        document.body.style.backgroundColor=rgbCode;
        color.textContent=rgbCode;
});
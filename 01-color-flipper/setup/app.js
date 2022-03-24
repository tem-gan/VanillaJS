const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","purple","brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    
        let r = Math.random()*(colors.length-0) + 0;
        r = Math.floor(r);
        document.body.style.backgroundColor=colors[r];
        color.textContent=colors[r];
});
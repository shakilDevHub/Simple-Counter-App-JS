let counterNumber = document.querySelector(".counterNumber");
let decriment = document.querySelector("#decriment");
let incriment = document.querySelector("#incriment");

let count=0;

incriment.addEventListener("click", ()=>{
    count++;
    counterNumber.innerText = count;
})
decriment.addEventListener("click", ()=>{
    count--;
    if(count<=0){
        count=0;
    }
    counterNumber.innerText = count;
})
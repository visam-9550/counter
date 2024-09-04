const headingElement = document.getElementById("heading")
headingElement.style.color = "blue";

const buttonEle = document.getElementById("button");

const counterEle = document.getElementById('counter')
    
let clickOnIncrementButton = function(){
    let previousNum = counterEle.textContent
    let update_num = parseInt(previousNum) + 1
    counterEle.textContent = update_num 
    count_num = update_num
    if (parseInt(counterEle.textContent) > 0){
        counterEle.style.color = "green";
    }else if (parseInt(counterEle.textContent) < 0){
        counterEle.style.color = "red";
    }else  if (parseInt(counterEle.textContent) === 0){
        counterEle.style.color = "black";
    }
}
let clickOnDecrementButton = function(){
    let previousNum = counterEle.textContent
    let update_num = parseInt(previousNum) - 1
    counterEle.textContent = update_num 
    count_num = update_num
    if (parseInt(counterEle.textContent) > 0){
        counterEle.style.color = "green";
    }else if (parseInt(counterEle.textContent) < 0){
        counterEle.style.color = "red";
    }else if (parseInt(counterEle.textContent) === 0){
        counterEle.style.color = "black";
    }
}

let clickOnResetButton = function(){
    counterEle.textContent = 0
}


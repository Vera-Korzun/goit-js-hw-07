let counterValue=0;
const getDiv=document.querySelector('#counter')
let getSpan=document.querySelector('#value')
let clickDecrement=document.querySelector('button[data-action="decrement"]')
let clickIncrement=document.querySelector('button[data-action="increment"]')

const decrement=function(){
    counterValue-=1;
    value.textContent=counterValue;
}

const increment=function(){
    counterValue+=1;
    value.textContent=counterValue;
}

clickDecrement.addEventListener('click',decrement);
clickIncrement.addEventListener('click',increment);
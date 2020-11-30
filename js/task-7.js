const getInput=document.getElementById('font-size-control');
const changeStyle=function(){
    const getInputValue=document.getElementById('font-size-control').value;
    const getSpan=document.getElementById('text');

    getSpan.style.fontSize=`${getInputValue}px`;
}

getInput.addEventListener('input',changeStyle);

let inputElement=document.getElementById('name-input');

const showName=function(){
    let inputContent=inputElement.value;
    let getOutput=document.getElementById('name-output');
    (inputContent.length == 0) ?  getOutput.textContent='незнакомец' : getOutput.textContent=inputContent;
       
}

//inputElement.addEventListener('keydown',showName);
inputElement.addEventListener('input',showName);
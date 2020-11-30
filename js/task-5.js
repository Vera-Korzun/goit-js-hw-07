let inputElement=document.getElementById('name-input');

const showName=function(){
    let inputContent=document.getElementById('name-input').value;
    let getOutput=document.getElementById('name-output');
    if (inputContent.length == 0) {
        getOutput.textContent='незнакомец'
    } else {
        getOutput.textContent=inputContent;
    }    
}

//inputElement.addEventListener('keydown',showName);
inputElement.addEventListener('input',showName);
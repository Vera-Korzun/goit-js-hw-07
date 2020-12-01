let inputSimbols=document.getElementById('validation-input');
const showSimbols=function(){
    let inputContent=inputSimbols.value;
    if (inputContent.length==inputSimbols.getAttribute('data-length')) {
        inputSimbols.classList.remove('invalid');
        inputSimbols.classList.add('valid');
    } else {inputSimbols.classList.remove('valid'); inputSimbols.classList.add('invalid');};  
}

inputSimbols.addEventListener('focusout',showSimbols);
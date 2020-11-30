let inputSimbols=document.getElementById('validation-input');
const showSimbols=function(){
    let inputContent=document.getElementById('validation-input').value;
    let input=document.getElementById('validation-input');
    if (inputContent.length==input.getAttribute('data-length')) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {input.classList.remove('valid'); input.classList.add('invalid');};  
}

inputSimbols.addEventListener('focusout',showSimbols);

let itemLi=document.querySelectorAll('.item')
console.log(`В списке ${itemLi.length} категории.`);

itemLi.forEach((item) => {
    let h2 = item.querySelector('h2');
    let li = item.querySelectorAll('li');
  
    console.log(`Категория: ${h2.textContent}\nКоличество элементов: ${li.length}`);
  })
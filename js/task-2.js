const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

let itemUl=document.querySelector('#ingredients');

const createLi=function(item){
    const itemLi = document.createElement("li");
    itemUl.append(itemLi);
    itemLi.textContent = item;
};

ingredients.forEach(createLi);
console.log(itemUl);
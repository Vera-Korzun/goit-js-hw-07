const numbersLi = document.querySelectorAll(".item")
//console.log(numbersLi) //находим ммассив всех li.item
//console.log(numbersLi.length) //находим количество всех li.item в массиве
console.log(`В списке ${numbersLi.length} категории.`) //шаблонная строка

const categoryNumbersLi = [...numbersLi]
	.map(
		numbersLi =>
			`Категория: ${numbersLi.children[0].textContent} Количество элементов: ${numbersLi.children[1].children.length}`,
	) //массив из h2=numbersLi.children[0].textContent и кол-во li=numbersLi.children[1].children.length
	.join("\n")
console.log(categoryNumbersLi)
//numbersLi.children[0].textContent
//массив li/1ый эл-т массива li/текстовый контент внутри 1ый эл-т массива li

//numbersLi.children[1].children.length
//массив li/2ой эл-т массива li/количество всех li во 2ом эл-те массива li

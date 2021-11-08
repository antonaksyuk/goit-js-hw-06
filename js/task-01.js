// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.


const itemsRef = document.querySelectorAll('li.item');

console.log('Number of categories:', itemsRef.length);

// 2. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).

itemsRef.forEach(item => {
    const titleRef = item.querySelector('h2');

    // console.log(titleRef);

    const numberOfList = item.querySelectorAll('ul li');

    // console.log(numberOfList.length);

    console.log(`Category: ${titleRef.textContent}\r\nElements: ${numberOfList.length}`);
});

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

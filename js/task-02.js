// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>



// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// 1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2 Добавит название ингредиента как его текстовое содержимое.
// 3 Добавит элементу класс item.
// 4 После чего вставит все < li > за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulAkccessRef = document.querySelector('#ingredients');
console.log(ulAkccessRef);

const createLi = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  // console.log(element);
  return element;
 
})

ulAkccessRef.append(...createLi);


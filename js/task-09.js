// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на
// button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

// console.log(spanColor, buttonColor);
buttonColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = document.body.style.backgroundColor
});




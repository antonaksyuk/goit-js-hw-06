// Напиши скрипт, который реагирует на изменение значения input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRef = document.querySelector('#font-size-control');
inputRef.setAttribute('value', 16)
const textRef = document.querySelector("#text");

let textChange = 0;

inputRef.addEventListener('input', (event) => {
    textChange = event.currentTarget.value
    textRef.style.fontSize = textChange.toString() + 'px'
});

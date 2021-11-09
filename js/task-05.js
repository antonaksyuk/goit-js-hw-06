// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const nameInputRef = document.querySelector('#name-input');

const nameOutputRef = document.querySelector('#name-output');

// console.log(nameInputRef, nameOutputRef);

nameInputRef.addEventListener("input", (event) => {
    nameOutputRef.textContent = event.currentTarget.value;
});


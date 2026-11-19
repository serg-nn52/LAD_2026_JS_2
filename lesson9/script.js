console.log('test DOM');

const title = document.querySelector('h1');
console.log(title);

// const message = document.getElementById('message');
const message = document.querySelector('#message');
console.log(message);

message.addEventListener('click', () => {
    message.classList.toggle('cross-line')
})

// const textList = document.getElementsByClassName('text');
const textList = [...document.querySelectorAll('.text')];
console.log(textList);


const firstItem = document.querySelector('.menu-item');

console.log(firstItem.parentElement);


const menu = document.querySelector('.menu');

const menuItems = menu.querySelectorAll('.menu-item');

console.log(menuItems);

firstItem.textContent = 'Обновленный контент элемента 1';

menu.innerHTML += `
    <li>Новый пункт меню 1</li>
    <li>Новый пункт меню 2</li>
`

console.log(firstItem);

const circle = document.querySelector('.circle');

circle.classList.add('red');

circle.addEventListener('click', () => {
    circle.classList.toggle('red');
})


circle.style.border = '5px solid black';
// circle.style.borderRadius = '15%';

const list = document.querySelector('.list');

const listItem = document.createElement('li');
listItem.textContent = 'Первый созданный элемент списка';
listItem.classList.add = 'color-red';

list.prepend(listItem);

const listTitle = document.createElement('h2');
listTitle.textContent = 'Заголовок списка';

list.before(listTitle);

// listTitle.addEventListener('click', () => {
//     listTitle.remove();
// })

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM отображен!')
})


const button = document.querySelector('.btn');
const input = document.querySelector("#input");
const inputText = document.querySelector('.input-text');

button.addEventListener("click", function (event) {
  console.log(event.type); // "click"
  console.log(event.target); // цель события, например span внутри кнопки
  console.log(event.currentTarget === button); // true
  console.log(this);   // true
  input.value = '';
  inputText.textContent = '';
});




input.addEventListener('input', (event) => {
    console.log(event.target.value);
    inputText.textContent = event.target.value;
})


input.addEventListener('focus', () => console.log('focus')); 
input.addEventListener('blur', () => console.log('blur')); 



const innerCircle = document.querySelector('.inner-circle');

innerCircle.addEventListener('click', (event) => {
    // event.stopPropagation();
    console.log('click inner-circle', event.target, event.currentTarget);
})

circle.addEventListener('click', (event) => {
    console.log('click circle', event.target, event.currentTarget);
})

document.body.addEventListener('click', () => {
    console.log('click body');
})


const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit');
})


const todo = document.querySelector('.todo');

todo.addEventListener('click', (event) => {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget)
    if(event.target !== event.currentTarget) {
     event.target.classList.toggle('cross-line');
    }
})
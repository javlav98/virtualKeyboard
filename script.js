const buttons = document.querySelectorAll('.button');
const textArea = document.querySelector('textarea');

const deleteButton = document.querySelector('.delete');
const spaceButton = document.querySelector('.space');
const capsButton = document.querySelector('.caps');
const enterButton = document.querySelector('.enter');
const shiftButton = document.querySelector('.shift');
const tabButton = document.querySelector('.tab');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    textArea.value += button.innerText.toLowerCase();
  });
});

deleteButton.addEventListener('click', () => {
  textArea.value = textArea.value.slice(0, -1);
});

spaceButton.addEventListener('click', () => {
  textArea.value += ' ';
});

capsButton.addEventListener('click', () => {
    buttons.forEach(button => {
        button.innerText = button.innerText.toLowerCase();
    });
});

enterButton.addEventListener('click', () => { 
  textArea.value += '\n';
});

shiftButton.addEventListener('click', () => {
  buttons.forEach(button => {
    button.innerText = button.innerText.toUpperCase();
  });
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode"); 
    }
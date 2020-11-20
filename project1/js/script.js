//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const changeBackground = () => {
  colorIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

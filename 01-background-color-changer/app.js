const body = document.body;
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`

    body.style.backgroundColor = color;

});
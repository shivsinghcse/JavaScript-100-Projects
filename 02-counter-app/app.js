const count = document.querySelector('.count');
const increment = document.querySelector('.inc-btn');
const decrement = document.querySelector('.dec-btn');
const reset = document.querySelector('.reset-btn');

let counter = 0;
count.textContent = counter;
increment.addEventListener('click', () => {
    counter++;
    count.textContent = counter;
})


decrement.addEventListener('click', () => {
        if(counter > 0){
            counter--;
        }
    count.textContent = counter;
})

reset.addEventListener('click', () => {
        counter = 0;
    count.textContent = counter;
})
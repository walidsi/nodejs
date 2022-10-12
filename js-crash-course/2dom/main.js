// // ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// // LOGGING OUTPUT
// // alert('Hello World'); // Do not use for debugging. Stops script and only strings
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// console.log(window);

// // Single element selector
// const form = document.getElementById('my-form'); // select by id
// console.log(form);
// const section = document.querySelector('.container'); // select by class
// console.log(section);
// const h1 = document.querySelector('h1'); // get the first element of tag h1
// console.log(h1);


// // Multiple element selector
// const items = document.querySelectorAll('.item'); // all element of class item
// console.log(items);

// items.forEach((item) => console.log(item));

// // Update the DOM
// const ul = document.querySelector('.items');
// // ul.remove(); //removes all list items from UI
// // ul.lastElementChild.remove(); // remove last element
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.children[2].innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // useful in events to change style and look on the fly

// // Events
// btn.addEventListener('click', (e) => {
//   e.preventDefault(); // prevents form submission in this case
//   // alert('TADA!')
//   document.querySelector('#my-form').style.background = '#ccc'; // # in '#my-form' means id
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild().innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter both fields';
        setTimeout(() => {
            msg.classList.remove('error');
            msg.innerHTML = '';
        }, 3000);
    } else {
        li = document.createElement('li');
        li.innerHTML = `${nameInput.value} : ${emailInput.value}`;
        usersList.appendChild(li)

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

console.log('Hello World!')

// Primitive data types: String, Numbers, Boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof rating);

// Concatenation string
console.log('My name is ' + name + ' and I am ' + age)
// Template string
console.log(`My name is ${name} and I am ${age}`)

// String properties and methods
const s = 'Hello World!';

console.log(s.length)

console.log(s.split(''))

console.log(s.split(' '));

console.log(s.substring(0, 5))

// Arrays - variables that hold multiple values

numbers = new Array(1, 2, 3, 4, 5); // not the used convention
console.log(numbers)

const fruits = ['apples', 'oranges', 'pears'] // the used convention
console.log(fruits)
console.log(fruits[1])
fruits[3] = 'grapes' //not the best way to append to array
console.log(fruits)
fruits.push('mangos')
console.log(fruits)
fruits.unshift('strawberries')
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(fruits.indexOf('oranges'))

// Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main Street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstname)
console.log(person.hobbies[1])
console.log(person.address)

// Destructuring, pulling stuff out of an object literal
const { firstName, lastName } = person
console.log(firstName, lastName)

person.email = 'John.Doe@email.com'
console.log(person.email)

const todos = [
    {
        id: 1,
        text: 'Take trash out',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text)

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0;
while (i < 10) {
    console.log(`While loop number ${i}`);
    i++;
}

// Better way for looping on array than looping on index
for (let todo of todos) {
    console.log(todo.text);
}

// High order functions for looping over arrays
todos.forEach(function (todo) {
    console.log(todo.id)
});

// Map
const todostext = todos.map(function (todo) {
    return todo.text;
});
console.log(todostext)

// filter then map
const todosFiltered = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
console.log(todosFiltered);

// == and ===
const xx = 20;

if (xx === 10) {
    console.log('xx is 10')
}
else if (xx > 10) {
    console.log('xx is greater than 10')
}
else {
    console.log('x is less than 10')
}

const color = xx > 20 ? 'green' : 'red'; // compact expression for if else statement

switch (color) {
    case 'green':
        console.log('color i green');
        break;
    case 'red':
        console.log('color is red');
        break;
    default:
        console.log('color is not green or red');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2)
}

addNums();
addNums(2, 3);

// Arrow function syntax
const addNums2 = (num1 = 1, num2 = 2) => {
    return num1 + num2
}

console.log(addNums2(5, 6));

// if function only contains one line, you can remove the paranthesis
const addNums3 = (num1 = 1, num2 = 2) => num1 + num2
console.log(addNums3(10, 20));

//////////// Classess and Objects

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instaniate object
const person_org = new Person('John', 'Doe', '1-1-1980');
console.log(person_org);
console.log(person_org.getFullName());


// Class type, introduced in ES6
class Person1 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person1('John', 'Doe', '1-1-1980');
console.log(person1);
console.log(person1.getFullName());
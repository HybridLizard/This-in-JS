// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('1:');
console.log(this);

function fun() {
  console.log('2:');
  console.log(this);
}

fun();

let fun2 = () => {
  console.log('3:');
  console.log(this);
};

fun2();

let obj = {
  objFun: function () {
    console.log('4:');
    console.log(this);
  },
  objFun2: () => {
    console.log('5:');
    console.log(this);
  },
};

obj.objFun();
obj.objFun2();

class Animal {
  constructor(name) {
    this.name = name;

    console.log('6:');
    console.log(this);
  }

  sayHi() {
    console.log('6:');
    console.log(this);

    console.log(`I am ${this.name}`);
  }
}

let a = new Animal('Dog');
a.sayHi();

// ! 'this' keyword
/* 
1. In an object, 'this' refer to an object.
2. Alone, 'this' refer to a global object.
3. In an event, 'this' refer to an element that receives the event.
4. In a function, 'this' refer to a global object.
5. In a function, in strict mode 'this' undefined.
*/

// ! Encapsulation
/* 
Javascript classes allows to create a private field and methods that are not accessible outside the Class. This is typically achieved by using '#' syntax
*/

class Person {
  #name; //creating a private field by '#'
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.#name} sleep at 10 pm`);
  }
}

const solim = new Person("Solimuddin", 30);
console.log(solim); //Person {name: 'Solimuddin', age: 30}
console.log(solim.age); //30 //age is accessible
// console.log(solim.#name); //Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 2, 3]));

const [a, b] = [1, 2, 3, 4, 5];
console.log(a + b);

const nums = [1, 2, 3, 4, 5];
let res = nums.filter((n) => n % 2);
console.log(res);

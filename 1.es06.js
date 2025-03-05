// Accessing object method

const person = {
  1: "first",
  name: "hena",
  friends: ["Korim", "Hero Alam"],
  details: {
    job: "yes",
    isMarried: true,
    status: "Not Found",
  },
};

// ! Method-1: accessing object property by (.) method
console.log(person.friends); //(2) ['Korim', 'Hero Alam']
console.log(person.details.job); //yes

console.log(person.mother); //undefined

// console.log(person.mother.name); //Uncaught TypeError: Cannot read properties of undefined (reading 'name') it shows error in that case optional chaining is used to save from error.

// ! 1. Optional Chaining (?) - it is used to avoids error in (.) dot notation method
console.log(person.mother?.name); //undefined
/* এখানে  person.mother পর্যন্ত যদি true হয় তাহলে name access করবে আর যদি mother পর্যন্ত false হয় তা undefined return করবে। কোন error দিবে না। i.e error ছাড়া পরবর্তী step জাওয়া জাবে।*/

// ! Method-2: Accessing by bracket notation []
console.log(person["1"]); //first
/* Note: You cannot access number by (.) notation */

console.log(person["details"]["status"]); //Not Found

/* Note: in bracket notation optional chaining not used because it doesn't shows error if the nested object property is not found */
console.log(person["details"]["isDivorced"]); //undefined

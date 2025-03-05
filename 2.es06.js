// ! 1. Array.map() - returns array
const number = [1, 2, 3, 4, 5];

const newArr = number.map((val) => val + 1);
console.log(newArr); //(5) [2, 3, 4, 5, 6]

//Square an array elements using map
const squareArr = number.map((val) => val * val);
console.log(squareArr); //(5) [1, 4, 9, 16, 25]

const friends = ["rahim", "korim", "jobbar", "hero alom"];
const newFriends = friends.map((val, index) => {
  console.log(val, index); //rahim 0 korim 1 jobbar 2 hero alom 3 //loop over array elements with index no.
  return val;
});

console.log(newFriends); //(4) ['rahim', 'korim', 'jobbar', 'hero alom'] //returns an array

//! 2. Array.forEach() - it doesn't returns that's why as like as map it's not declare in variable

const products = [
  { id: 1, name: "Iphone", color: "Navy", price: 1500, brand: "Apple" },
  { id: 2, name: "Xiaomi", color: "Sky-blue", price: 1000, brand: "Xiaomi" },
  {
    id: 3,
    name: "Samsung A52",
    color: "golden-rod",
    price: 800,
    brand: "Samsu",
  },
  { id: 4, name: "Iphone", color: "Black", price: 1100, brand: "Apple" },
  { id: 5, name: "Xiaomi", color: "Navy", price: 400, brand: "Xiaomi" },
];

products.forEach((val) => {
  if (val["color"] === "Navy") {
    console.log(val);
    /* {id: 1, name: 'Iphone', color: 'Navy', price: 1500, brand: 'Apple'}
2.es06.js:37 {id: 5, name: 'Xiaomi', color: 'Navy', price: 400, brand: 'Xiaomi'} */
  }
});

//! 3. Array.filter() - returns an array according to condition

const sortByPrice = products.filter((val) => val["price"] >= 1000);
console.log(sortByPrice);
/*(3)[ 
0: {id: 1, name: 'Iphone', color: 'Navy', price: 1500, brand: 'Apple'}
1: {id: 2, name: 'Xiaomi', color: 'Sky-blue', price: 1000, brand: 'Xiaomi'}
2: {id: 4, name: 'Iphone', color: 'Black', price: 1100, brand: 'Apple'} 
]*/

// find the products that's id number is not equal to 3
const newProducts = products.filter((val) => val["id"] != 3);
console.log("New Product: ", newProducts);
/* 0: {id: 1, name: 'Iphone', color: 'Navy', price: 1500, brand: 'Apple'}
1: {id: 2, name: 'Xiaomi', color: 'Sky-blue', price: 1000, brand: 'Xiaomi'}
2: {id: 4, name: 'Iphone', color: 'Black', price: 1100, brand: 'Apple'}
3: {id: 5, name: 'Xiaomi', color: 'Navy', price: 400, brand: 'Xiaomi'} */

// ! 4. Array.find() - returns particularly first element according to condition is matched i.e প্রথম যে element টা মিলবে তাকে return করে।

const find = products.find((val) => val["id"] > 2);
console.log(find); //{id: 3, name: 'Samsung A52', color: 'golden-rod', price: 800, brand: 'Samsu'}

// Exercise-1: find out the product apple and increase the price to $600
const appleProducts = products.map((product) => {
  if (product["brand"] == "Apple") {
    product["price"] += 600;
  }
  return product;
});

console.log(appleProducts); /* 
(5) [{…}, {…}, {…}, {…}, {…}]
0: {id: 1, name: 'Iphone', color: 'Navy', price: 2100, brand: 'Apple'}
1: {id: 2, name: 'Xiaomi', color: 'Sky-blue', price: 1000, brand: 'Xiaomi'}
2: {id: 3, name: 'Samsung A52', color: 'golden-rod', price: 800, brand: 'Samsu'}
3: {id: 4, name: 'Iphone', color: 'Black', price: 1700, brand: 'Apple'}
4: {id: 5, name: 'Xiaomi', color: 'Navy', price: 400, brand: 'Xiaomi'}
*/

// ! class = functional object
class Product {
  constructor(name, price, brand, malik) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.malik = malik;
  }

  detail() {
    console.log(
      `I am ${this.name}, My price is ${this.price}. My Brand is ${this.brand}. My malik is ${this.malik}`
    );
  }
}

const iphone = new Product("Iphone 12", 120000, "Apple", "Ghulam");
iphone.detail(); //I am Iphone 12, My price is 120000. My Brand is Apple. My malik is Ghulam

const xiaomi = new Product("Redmi", 16000, "Xiaomi", "Ammar");
xiaomi.detail(); //I am Redmi, My price is 16000. My Brand is Xiaomi. My malik is Ammar

// ! class Inheritance
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("Ami chola chol kori");
  }
}

class Bus extends Vehicle {
  constructor(name, price, route) {
    super(name, price);
    this.route = route;
  }

  stoppage() {
    console.log(this.route);
  }
}

const bike = new Vehicle("Royal Enfield", 30000);
bike.move();

const volvoBus = new Bus("Volvo", 6000000, "Dhaka to cox");
volvoBus.stoppage();

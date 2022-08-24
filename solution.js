//#1
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toText() {
    return `${this.name} ${this.price}€ in total. ${(this.price * 0.16).toFixed(
      2
    )}€ VAT incl. (16%)`;
  }

  containedVAT() {
    return `${(this.price * 0.16).toFixed(2)}€ VAT incl.`;
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);
const pants = new Product("pants", 1.99);

// console.log(tracksuit.toText());
// console.log("here!!!!!", tracksuit);
// console.log(tracksuit.containedVAT());
// console.log(socks.toText());

//#2

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      return `Your shopping cart now contains ${this.products.length} ${
        this.products.length === 1 ? "product" : "products"
      } `;
    } else {
      return `This is not available in our shop!`;
    }
  }

  getProductInfoCart() {
    return this.products.forEach((el) => console.log(el.toText()));
  }

  getTotalItemPrice() {
    const total = this.products.reduce((acc, next) => acc + next.price, 0);
    return `The total price for ${
      this.products.length
    } items in your cart amounts to ${total.toFixed(2)}`;
  }
}

const cart = new Cart();
console.log(cart.addProduct("potato"));
console.log(cart.addProduct(tracksuit));
console.log(cart.addProduct(shoes));
console.log(cart.addProduct(socks));

console.log("************************************");

console.log(cart.getProductInfoCart());
console.log("************************************");

console.log(cart.getTotalItemPrice());

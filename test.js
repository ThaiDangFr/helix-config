function calculateTotal(items, discountRate) {
let total = 0;
for (let i = 0; i < items.length; i++) {
const item = items[i];
if (item.price > 0) {
total += item.price * item.quantity;
} else {
console.log("Invalid item price:", item);
}
}
if (discountRate > 0) {
total = total - (total * discountRate);
}
return total;
}

const cart = [
{ name: "Laptop", price: 1000, quantity: 1 },
{ name: "Mouse", price: 25, quantity: 2 }
];

console.log("Total:", calculateTotal(cart, 0.1));

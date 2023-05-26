const myArr = ["Dat", "Kien", "Son"];
const products = [
    { id: 1, name: "San pham A", price: 200 }, // item
    { id: 2, name: "San pham B", price: 300 }, // item
    { id: 3, name: "San pham C", price: 400 }, // item
];
products.find(function (item) {
    return item.id === 3; // { id: 3, name: "San pham C", price: 400 }
});
const app = document.getElementById("app");

// let content = "";

// for
// for (let i = 0; i < myArr.length; i++) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for...in
// for (let i in myArr) {
//     content += `<li>${myArr[i]}</li>`;
// }

// for..of
// for (let name of myArr) {
//     content += `<li>${name}</li>`;
// }

// forEach
// myArr.forEach((name, index) => (content += `<li>${name} + ${index}</li>`));

// [2,8,18,]

// Pass a function to map
const content = products
    .map(
        ({ name, price }) => `<div class="border hover:border-green-300">
        <h2>${name}</h2>
        <span>${price}</span>
        <button></button>
    </div>`
    )
    .join(" ");

app.innerHTML = `<div class="max-w-6xl mx-auto grid grid-cols-3 gap-8"> ${content}</div>`;

// Array methods: map, filter, reduce,
// destructoring, spread operator, rest parameter

const myNumber = [1, 2, 3, 4];
const newNumber = [...myNumber, 5, 6, 7, 8];
console.log({ myNumber, newNumber });

const myInfo = {
    name: "Dat",
};

const newMyInfo = {
    ...myInfo,
    age: 20,
};
// shallow copy và deep copy

console.log(newMyInfo);

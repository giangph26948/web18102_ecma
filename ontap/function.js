// function name

function functionName(a, b) {
    // validate
    if (typeof a !== "number" || typeof b !== "number") return;
    // processing
    // return
    return a + b;
}
console.log("Function name ", functionName("10", 20));

// function expression
const functionExpression = function (a, b) {
    return a + b;
};
console.log("Function expression ", functionExpression(10, 20));

// arrow function - Viết tắt của function expression
const functionArrow = (a, b) => a + b;
console.log("Arrow function ", functionArrow(10, 20));

// IFFE function
((a, b) => {
    console.log("IFFE Function", a + b);
})(10, 20);

function show(myArr) {
    // validate
    if (!Array.isArray(myArr)) return;
    // processing
}

show([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// var, let, const
var a = 10;
var a = 20;
console.log(a);

let b = 10;
b = 20;

// const c = 10;
// c = 20;

// console.log(c);

// bỏ var đi
// tất cả các biến đều sử dụng const
// khi mà chúng ta chưa xác định được biến đấy có giá trị là gì

let content = "";

const students = ["A", "B", "C"]; // [xx65,xx01]

// Tham chiếu và tham trị

students.push("D");
console.log(students);

const person = {
    name: "Nguyen Van A",
};

person.age = 20;

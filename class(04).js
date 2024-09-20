let marks = [10, 20, 30, 40, 50]; // 60

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  console.log(i);
  //   sum = sum + marks[i];
  sum += marks[i];
}

console.log("Total marks " + sum);

// ------------------------------------------------------
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);

// first loop
// i = 0
// 0 < 3 -> true
// i++

// second loop
// i = 1
// 1 < 3 -> true
// i++

// third loop
// i = 2
// 2 < 3 -> true
// i++

// fourth loop
// i = 3
// 3 < 3 -> false
// i++
// console.log("before loop");

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log("after loop");
// ---------------------------------------------
// i++ -> post increment
// ++i -> pre increment
let i = 1;
// let x = 10 + i++;
// console.log(x);

// ---------------------------------------------
// object literal
// let students = [
//   {
//     name: "ahmed",
//     marks: 80,
//     isPass: true,
//     age: 22,
//   },
//   {
//     name: "ali",
//     marks: 70,
//     isPass: true,
//     age: 20,
//   },
//   {
//     name: "asad",
//     marks: 40,
//     isPass: false,
//     age: 17,
//   },
// ];

// console.log(students);

// students[0].marks = 100;

// console.log(students[0].marks);

// let student1 = {
//   name: "ahmed",
//   marks: 80,
//   isPass: true,
//   age: 22,
// };

// let student2 = {
//   name: "ali",
//   marks: 70,
//   isPass: true,
//   age: 20,
// };

// let student3 = {
//   name: "asad",
//   marks: 40,
//   isPass: false,
//   age: 17,
// };

// student1.name = "ali";
// student1.age = 20;

// console.log(student1.name);
// console.log(student1.isPass);
// console.log(student1);

// --------------------------------------
// ordered collection
// dynamic nature array

// let marks = [10, 20, 30];

// let names = ["ahmed", "ali", "zubair"];

// let attendances = [true, false, true];

// marks.unshift(20);
// let removedEl = marks.shift();
// console.log(marks);
// console.log(removedEl);

// --------------------------------------
// let marks = [10, 20, 30, 40];
// marks[marks.length] = 50;
// marks.push(60)
// marks.pop()

// console.log(marks);
// console.log(marks[1]);

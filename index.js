// task 1
for (let i = 5; i < 100; i = i + 1) {
  console.log(i);
}

//task 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}
//task 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log("არის");
    break;
  }
}
//task 4
let array3 = [1, 2, 3, 4, 5];
let summ = 0;
for (let i = 0; i < array3.length; i++) {
  summ = summ + array3[i];
  console.log(summ);
}
//task 5
let array4 = [1, 2, 3, 7, 6, 9];
let total = 0;
for (i = 0; i < array4.length; i++) {
  total = total + array4[i];
  console.log(total / array4.length);
}
//task 6
let array5 = [1, 2, 3, 7, 6, 9];
for (i = 0; i < array5.length; i++) {
  if (array5[i] === 7) {
    continue;
  }
  console.log(array5[i]);
}
//task 7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

//task 8
let user2 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("hello");
} else if (user2.name === "levani") {
  console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("hello world");
} else {
  console.log("error");
}
//task 10
let numbers = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

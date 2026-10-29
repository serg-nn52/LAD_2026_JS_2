// const re = /o/g;               // шаблон o, флаг g

// const letter = "o";
// const same = new RegExp(letter, "g"); // то же, если шаблон в переменной

// const result = "hellO world".replace(/o/gi, "1"); // "hell0 w0rld"

// console.log(result);


// const clearString = (str) => {
//     const regexp = /[^a-zA-Zа-яА-ЯёЁ0-9]/g;
//     return str.replace(regexp, '');
// }

// const str = 'test123test./,rr_dfs&';



// console.log(clearString(str));

// const str = "test test    test   ewerew";

// const regexp = /\s+/g;

// console.log(str.replace(regexp, ' '));

// console.log(str.split(regexp));


//Массивы

const fruitsList = ['apple', 'banana', 'cherry']; //arr

// fruitsList[10] = 'pineapple'; //плохая практика


//fruitsList.age = '1day'; //плохая практика

// console.log(fruitsList);

// console.log(Array.isArray(fruitsList));

// fruitsList[0] = "pineapple";

// fruitsList.length = 1;

// fruitsList.push('pineapple', 'orange'); // 1

// fruitsList.unshift('grape');

// fruitsList.pop();

// fruitsList.shift();

// console.log(fruitsList, fruitsList.includes('apple'));

// let arr = [1, 2, 3, 4];


//find

// let found = arr.find((item) => item > 2);
// console.log(found); // 3 — первый подходящий, 4 уже не проверяется

// let users = [{ name: "Ivan", age: 18 }, { name: "Anna", age: 25 }];
// console.log(users.find((el) => el.age > 20)); // { name: "Anna", age: 25 }
// console.log(users.find((user) => user.age > 30)); // undefined

//filter

// let numbers = [1, 2, 3, 4];

// const evenNumbers = numbers.filter((el) => el % 2 === 0);

// console.log(evenNumbers);

//map
// let arr = [1, 2, 3, 4];

// let tens = arr.map((item, idx) => item * idx);
// console.log(tens); // [10, 20, 30, 40]


// const news = ['news1', 'news2'];

// const normalizedNews = news.map((el, idx) => `${idx +1}: ${el}`);

// console.log(normalizedNews);

// let arr = [1, 2, 3, 4];

// arr.forEach((item) => console.log(item));

// let fruits = ["Яблоко", "Груша"];

// fruits.forEach((item, index) => {
//   console.log(index + ": " + item);
// });


// let arr = [1, 2, 3, 4, 5, 9, 6];

// let sum = arr.reduce((accum, current) => {
//     if(current % 2 !== 0) return accum;
//     return accum + current
// }, 0);
// console.log(sum);


// let nums = [10, 9, 1, 25];
// nums.sort((a, b) => b - a);
// console.log(nums);


// const users = [
//     {
//         name: 'Sergey',
//         age: 41
//     },
//     {
//         name: "Anna",
//         age: 20
//     },
//     {
//         name: 'Yana',
//         age: 18
//     }
// ]

// users.sort((a, b) => a.age < b.age ? 1 : -1);

// console.log(users);


// let names = ["Оля", "Анна", "Борис"];
// names.sort((a, b) => {
//     console.log(a > b ? 1 : -1);
//     return a > b ? 1 : -1;
// });

//  console.log(names);


// const createUniqArray = (arr) => {
//     const tempArr = [];
//     arr.forEach((el) => {
//         if(!tempArr.includes(el)) {
//             tempArr.push(el);
//         }
//     })
//     return tempArr;
// }


// const numbers = [1, 2, 3, 2, 6, 8, 1];

// console.log(createUniqArray(numbers));


// let arr3 = [1, 2];
// let arr4 = [1, 3];

// function compareArr(arr1, arr2) {
//     let length1 = arr1.length;
//     let length2 = arr2.length;
//     if (length1 !== length2) {
//         return false;
//     }

//     for (let i = 0; i < length1; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(compareArr(arr3, arr4));


// const arr = [1, 2, 3, 4, 5];

// const evenNumbers = [];

// for(let el of arr) {
//     if(el % 2 === 0) {
//         evenNumbers.push(el);
//     }
// }

// console.log(evenNumbers);


let obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
// const isPalindrome = (str) => {
//     let reversedStr = '';
//     for(let i = 0; i< str.length; i++) {
//         reversedStr = str[i] + reversedStr;
//     }
//     return str.toUpperCase() === reversedStr.toUpperCase();
// }

// const result = isPalindrome('xcvxzcxvcxzv');
// console.log(result);


//object

// const user = {
//     name: 'Sergey',
//     age: 41,
//     work: {
//         placeOfWork: 'Minsk',
//         salary: '10 000',
//     },
//     sayHi: () => {
//         console.log('Hi!');
//     },
//     sayGoodBay() {
//         console.log('GoodBay');
//     },
//     'has-children': true, 
// }

// user.car = 'BMW';
// user.age = 42;

// const key = 'name';

// // delete user.age;

// console.log(user['has-children']);

// const myFavoriteFilm= { 
// name: 'Titanic',
// productionYear: 1998,
// director: 'James_Cameron',
// country: 'USA'
// }

// myFavoriteFilm['box-office'] = '150000000 mln';

// delete myFavoriteFilm.productionYear

// myFavoriteFilm.showFilmName = function() {
//     console.log(myFavoriteFilm.name)
// }

// myFavoriteFilm.showFilmName();

// console.log (myFavoriteFilm);


// console.log("hi".toUpperCase());

// console.log((1.2395).toFixed(2));

// console.log(0.000002 === 2e-6);

// const width = '200px';

// const fontSize = '2.5em';

// console.log(parseFloat(fontSize));

// console.log(Number.isNaN(NaN));

// console.log(isFinite(Infinity));

// const age = undefined;

// console.log(String(age));


// console.log(Math.min(1, 2, 5, 67, 100));

// console.log(Math.random());

// let num = 12.64;

// console.log(+num.toFixed(1));

// let str = 'Hello!\nMy name is Sergey, my disk C:\\dir, my login is \'Pirat\'';

// str[0] = 'W';

// str+='!!';

// console.log(str);

// console.log("  Ivan      Drago     ".trim()); 
// console.log("Ivan".endsWith("a"));
// console.log("a,b,c".split("b"));

// let str = "Widget with id";

// console.log(str.includes('sdfsdf'));

// console.log(str.indexOf('fsafdsdf'));

// let str = "stringify";

// const capitalizeString = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(str.slice(0, -1));     // "strin" — символы 0…4

// console.log(capitalizeString(str));
// console.log(str.slice(-3));       // "ify"   — 3 последних

// function getRandomInt(min, max) {
// //   min = Math.ceil(min);
// //   max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min + 1)) + min;

//     const range = max - min;
//     return Math.round(range * Math.random() + min); 
// }

// getRandomInt(1, 4);

// function isUpperCase(str, n) {
//   if (n < 0 || n >= str.length) {
//     return false;
//   }
//   const char = str[n];
//   return char === char.toUpperCase();
// }

// console.log(isUpperCase('test', 10));

// console.log(2.1 + 2.2); 
// console.log(0.1 + 0.2 === 0.3);

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3
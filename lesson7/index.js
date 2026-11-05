// 'use strict';
// function sayHi () {
//     console.log(`Привет, я ${this.name}`);
// }

// sayHi();


// let user = {
//   name: "Ivan",
//   sayHi: sayHi,
// };

// let admin = {
//   name: "Sergey",
//   sayHi,
// };

// const userSayHi = user.sayHi; // Привет, я Ivan

//  user.sayHi();
// userSayHi();
//admin.sayHi();

// function showThis() {
//     console.log(this);
// }

// showThis();

// function example() {
//   console.log(this);
// }

// const testObject = {
//   testMethod: example,
// };

// testObject.testMethod();

// setTimeout(() => user.sayHi(), 1000);


// const user = {
//     name: 'Sergey',
//     showThis: () => {
//         console.log(this);
//     }
// }

// user.showThis();

// const city = {
//   name: "Краснодар",
//   size: 1514685,
//   getName: function() {
//     return this.name
//   },
//   getSize: function() {
//     return this.size
//   }
// }
// console.log(city.getName())
// console.log(city.getSize())

// let city = {
//     name: 'St.Petersburg',
//     population: 4000000,
//     sayName() {
//         console.log('Название города - ' + this.name)
//     },
//     sayPopulation() {
//         console.log('Население - ' + this.population)
//     }
// }

// city.sayName();
// city.sayPopulation();

// let city = {
//     name: "Berlin",
//     population: 13000000,
//     getName() {
//       return this.name;
//     },
//     getPopulation() {
//       return this.population;
//     },
//     setProp(key, value) {
//       this[key] = value;
//     },
//   };

//   console.log(city.getName());
//   console.log(city.getPopulation());

//   city.setProp("population", 1500000);
//   city.setProp('postIndex', 600000)
//   console.log(city);


// function sayHi (word) {
//     console.log(`${word}, я ${this.name}`);
// }

// let user = {
//   name: "Ivan",
// };

// let admin = {
//   name: "Sergey",
// };

// sayHi.call(user, 'Hello');
// sayHi.apply(admin, ['Hello']);
// const userSayHi = sayHi.bind(user, 'Привет');
// userSayHi();

// let user = {
//   name: "Ivan",
//   sayHi() {
//     console.log(this.name);
//   },
// };

//setTimeout(user.sayHi.bind(user), 1000); // Ivan — this привязан
// setTimeout(user.sayHi.bind(user), 1000);    
// let city = {
//     name: "Berlin",
//     population: 13000000,
//     getName() {
//       return this.name;
//     },
//     getPopulation() {
//       return this.population;
//     },
//     setProp(key, value) {
//       this[key] = value;
//     },
//   };

// let city2 = {
//   name: "Manih",
//   population: 566666,
// };
// console.log(city.getName.call(city2));
// console.log(city.getPopulation.apply(city2));

// const setForCity2 = city.setProp.bind(city2);

// setForCity2("population", 6000000);
// setForCity2("name", "Moscow");

// console.log(city2);


// let course = "JavaScript";

// function outer() {
//   let lesson = 7;
//   function inner() {
//     console.log(`${course}, урок ${lesson}`); // видит обе внешние переменные
//   }
//   inner();
// }

// outer(); // JavaScript, урок 7

// function example(a) {
//   let c = 1; // эта область видимости попадает в замыкание

//   return function (b) {
//     // внутренняя функция замкнута на переменные example: a и c
//     return a + b + c;
//   };
// }

// const fn = example(2);
// console.log(fn(3));


// const createCounter = () => {
//     let count = 0;

//     return () => {
//         count++;
//         console.log(count);
//     }
// }


// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter1();
// counter1();
// counter2();
// counter2();
// counter1();


// function createCalculator(h = 10) {
//   return function (a, b) {
//     return a * b * h;
//   };
// }

// const calculator = createCalculator(100);

// console.log(calculator(1, 3))

function volume() {
    const height = 10;

    return function calculate(a, b) {
        return a * b * height;
    }
}

const result = volume();
console.log(result(2, 3));
console.log(result(1, 3));
console.log(result(1, 1));
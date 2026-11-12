// const animal = {
//     legs: 4,
//     sayHi() {
//         console.log('Hi!');
//     }
// }

// const dog = {
//     hasTail: true,
//     name: 'Pirat',
//     age: 4,
//     __proto__: animal
// }

// const cat = {
//     hasTail: true,
//     name: 'Murka',
//     age: 3,
//     __proto__: animal
// }

// cat.sayHi();
// dog.sayHi();


// dog.__proto__ = animal;

// console.log(dog);

// const user = {
//     isReader: true
// }

// const admin = Object.create(user);

// admin.isWriter = true;

// console.log(admin);


// let animal = {
//   jumps: "Прыжок!",
// };


// console.log(rabbit.jumps); // (1)

// delete rabbit.jumps;
// console.log(rabbit.jumps); // (2)

// delete animal.jumps;
// animal = null;
// let rabbit = {
//   __proto__: animal,
//   jumps: "Заяц прыгнул!",
// };
// delete rabbit.jumps;
// // console.log(animal);

// console.log(animal.jumps); // (3)


// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//     console.log("Меня зовут: " + this.name);
//   };

// let firstUser = new User("Ivan", 21);  // User { name: "Ivan", age: 21 }
// let secondUser = new User("Alex", 18); // User { name: "Alex", age: 18 }
// // console.log(firstUser);
// // console.log(secondUser);

// // firstUser.sayHi();
// // secondUser.sayHi();

// console.log(User.prototype === firstUser.__proto__);


// function Postcard(from, to) {
//     this.from = from;
//     this.to = to;
// }

// Postcard.prototype.show = function () {
//     console.log(`Грамота отправлена из ${this.from} в ${this.to}`);
// }
// Postcard.prototype.setFrom = function (from) {
//   this.from = from;
// };

// let postcard1 = new Postcard("Zurich", "Zheneva");
// let postcard2 = new Postcard("Amsterdam", "Barselona");

// postcard1.setFrom('Berlin');

// postcard1.show();
// postcard2.show();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(`Привет, я ${this.name}`);
//     }
// }

// const user1 = User('Sergey', 41);
// user1.sayHi();

// console.log(user1);


// class Admin extends User {
//   deleteUser(name) {
//     console.log(`${this.name} удалил пользователя ${name}`);
//   }
// }

// const admin = new Admin("Ivan");
// admin.sayHi();          // Привет, я Ivan — метод родителя
// admin.deleteUser("Petr");

// class Admin extends User {
//   constructor(name, age, level) {
//     super(name, age);         // сначала конструктор родителя
//     this.level = level;  // потом свои свойства
//   }

//   sayHi() {              // переопределяем метод родителя
//     super.sayHi();       // Привет, я Ivan
//     console.log(`Уровень доступа: ${this.level}`);
//   }
// }

// const admin = new Admin("Ivan", 25, 3);
// console.log(admin);
// admin.sayHi();


// class Person {

// #name
//   constructor(name) {
//     this.#name = name; // срабатывает сеттер
//   }

//   get name() {
//     console.log('Был запрос имени!')
//     return this.#name;
//   }

//   set name(value) {
//     if (value.length < 2) {
//       console.log("Имя слишком короткое");
//       return;
//     }
//     this.#name = value;
//     console.log("Имя записано успешно!");
//   }
// }

// const person = new Person("Ivan");
// // console.log(person.name);
// person.name = "Sergey"; // Имя слишком короткое

// console.log(person);
// console.log(person.name);

// person.name;       // "Ivan"


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}
class Employee extends Person {
    constructor(name, surname, rate, days) {
        super(name, surname);
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const employee1 = new Employee("Ivan", "Ivanov", 3000, 20);
console.log(employee1.getFullName()); // "Ivan Ivanov"
console.log(employee1.getSalary());
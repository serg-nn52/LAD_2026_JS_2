//   try {
//     JSON.parse("{");
//   } catch (err) {
//     console.log(err);
//   }




// function checkTask(text) {
//   if (text.trim() === "") {
//     throw new Error("Введите задачу");
//   }
// }


// try {
//   checkTask("   ");
// } catch (error) {
//   console.log(error.message); // Введите задачу
// }


// function parseOptions(raw) {
//   try {
//     return JSON.parse(raw);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       return {};
//     }
//     throw error;
//   }
// }

// const data = parseOptions();

// console.log(data);

// console.log("Начинаем операцию");
// try {
//   JSON.parse("{}");
// } catch (error) {
//   console.error("Разбор не удался");
// } finally {
//   console.log("Операция закончилась");
// }

// setTimeout(() => {
//   try {
//     JSON.parse("{");
//   } catch (error) {
//     console.error("Некорректный JSON");
//   }
// }, 0);


// const promise = new Promise((res, rej) => {
//     // res('data');
//     setTimeout(() => res('data'), 1000);
// })

// console.log(promise);

function getSuggestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Повторить JavaScript");
    // reject("Ошибка!")
    }, 1000);
  });
}

// const result = getSuggestion();

// result.then((data) => {
//     return data.toUpperCase();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error(err);
// }).finally(() => {
//     console.log('Обработка завершена!');
// })

// const showSuggestion = async () => {
//     try {
//         const result = await getSuggestion();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
//     console.log('Что-нибудь!')
// }

// showSuggestion();

// console.log("Начало");

// setTimeout(() => console.log("Таймер"), 0);
// Promise.resolve().then(() => console.log("Промис"));

// console.log("Конец");


// setTimeout(function timeout() {
//  console.log('Таймаут'); //4
//  }, 0);

// let p = new Promise(function(resolve, reject) {
//  console.log('Создание промиса');   // 1
//  resolve();
//  });

// p.then(function(){
//  console.log('Обработка промиса'); //3
//  });


// console.log(1); //1

// setTimeout(() => console.log(2)); //5

// Promise.resolve().then(() => console.log(3)); //3

// Promise.resolve().then(() => setTimeout(() => console.log(4))); //7

// Promise.resolve().then(() => console.log(5));//4

// setTimeout(() => console.log(6)); //6

// console.log(7); //2


// console.log(1); //1

// setTimeout(() => console.log(2)); //5

// Promise.reject(3).catch(console.log); //3

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4)); //6

// Promise.resolve(5).then(console.log); //4

// console.log(6); //2

// setTimeout(() => console.log(7),0); //7

const user = {
  name: "Sergey",
  age: 41
}

const stringifyUser = JSON.stringify(user);

console.log(typeof stringifyUser);

localStorage.setItem('user', user);

console.log(localStorage.getItem('user'));
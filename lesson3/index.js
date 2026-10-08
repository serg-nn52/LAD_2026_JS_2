// console.log(NaN < Infinity);

//1. if

// const userAge = 17;

// if(userAge >= 18) {
//     console.log('Доступ разрешен!');
// } else {
//     console.log("Доступ запрещен, не достигли 18 лет!");
// }


//if(userAge >= 18) console.log('Доступ разрешен!'); //краткая запись

// const userValue = '';

// if(!!userValue) {
//     console.log('Данные корректны, форма отправляется!')
// } else {
//     console.log('Введите данные!');
// }

// const roleAge = 60;

// if(roleAge < 18) {
//     console.log('Роль школьник или учащийся!')
// } else if (roleAge < 60) {
//     console.log('Трудоспособный гражданин!')
// } else {
//     console.log('Пенсионер!');
// }

// const userAge = 19;

// userAge < 18 ? console.log('Доступ запрещен, не достигли 18 лет!') : console.log('Доступ разрешен!');

//switch/case

// const country = 'BELARUS';

// switch(country) {
//     case 'RUSSIA':
//         console.log('Русский язык');
//     //break;
//     case 'BELARUS':
//         console.log('Русский или белорусский язык');
//     //break;
//     case 'USA':
//        console.log('Английский язык');
//     //break;
//     default:
//         console.log('Другой язык');
// }

//Задача 1
// const line1 = 50;
// const line2 = 100;
// const line3 = 30;

// let maxLine = line1;

// if(line2 > maxLine) {
//     maxLine = line2;
// }

// if(line3 > maxLine) {
//     maxLine = line3;
// }

// console.log(maxLine);

//задача 2
// const temp = 10;

// if(temp <= -30){
//     console.log("Оставайтесь дома!");
// } else if(temp <= -10){
//     console.log("Сегодня холодно");
// } else if (temp <= 5){
//     console.log("Не холодно");
// } else if(temp <= 15){
//     console.log("Тепло");
// } else if(temp <= 25){
//     console.log("Очень тепло");
// } else  if(temp < 35){
//     console.log("Жарко");
// } else {
//     console.log("Пекло");
// }

// let temp = 40;

// if (temp <= -30) {
//   console.log("Оставайтесь дома!");
// } else if (-10 >= temp && temp > -30) {
//   console.log("Сегодня холодно");
// } else if (5 >= temp && temp > -10) {
//   console.log("Не холодно");
// } else if (15 >= temp && temp > 5) {
//   console.log("Тепло");
// } else if (25 >= temp && temp > 15) {
//   console.log("Очень тепло");
// } else if (35 >= temp && temp >= 25) {
//   console.log("Жарко");
// } else if (temp >= 35) {
//   console.log("Пекло");
// }

// console.log(temp);

//Задача 3
// let role = "boss"; 
// switch (role) {
//     case ("admin"):
//         console.log("Роль: админ. Год рождения: 2000. Любимый напиток: вода.")
//         break;
//     case ("manager"):
//         console.log("Роль: менеджер. Год рождения: 1960. Любимый напиток: слезы админа.")
//         break;
//     default:
//         console.log('Неизвестная роль!')
// } 
// let role = "sdfsdn";
// switch(role) {
//     case "admin":
//         console.log("Вы админ. Доступ полный");
//         break;
//     case "manager":
//         console.log("Вы менеджер. Высокие права доступа");
//         break;
//     case "user":
//         console.log("Вы пользователью У вас обычные права доступа.");
//         break;
//     default:
//         console.log("Неизвестная роль")
//     }

//console.log(!(null || !"апельсин" && true));


//while

// let i = 0;

// while(i < 10) {
//     i++;
//     console.log(i)
// }

// do while

// do {
//     console.log('test');
// } while(false)

//for 
// for (let i = 1; i <= 10; i++) {
//   console.log(i);  
//   if(i === 3) {
//     break;
//   }     
// }

// for (let i = 1; i <= 10; i++) {
//   if(!(i % 2)) {
//     continue;
//   }   
//     console.log(i);    
// }

// let n = 3;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// };

// console.log(sum);

let num = 3;
let sum = 0;
for (let i = 1; i <= num; i++) {
 sum += i;
};
console.log(sum);
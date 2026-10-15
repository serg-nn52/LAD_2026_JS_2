// Number.isNaN();

// function sayHi(name = 'Guest') {
//     console.log(`Hi, ${name}!`);
// }

// sayHi('Sergey');
// sayHi();

// function getSum(a, b=10) {
//   //b = b ?? 10;  // старый приём
//   console.log(a + b);
// }
// getSum(3);    // 13
// getSum(3, 0); //13

// function getSum(a, b) {
//   return (
//     a + b // после return код ниже не выполнится
//   )
// }

// const result = getSum(2, 3);
// console.log(result);
// console.log(getSum(3, 7));

// let userName = 'Sergey';

// function sayHi() {
//   let text = "Hi!";
//   console.log(text); // "Hi!" — видно здесь
// }

// function sayGoodBay() {
//   let text = "GoodBay!";
//   setTimeout(() => {
//         console.log(text)
//     }, 1000)
//   //console.log(text); // "Hi!" — видно здесь
// }

// const sayAddress = function(cb) {
//     cb();
// }

// sayAddress(sayHi);
// sayAddress(sayGoodBay);

// setTimeout(sayHi, 3000)




// sayHi();
// sayGoodBay();

// console.log(userName);

// if(true) {
//     var test = 'test';
// }
//  console.log(test);

// console.log(age);
// var age = 25;
// console.log(age);

// let a = 2
// let b = 3
// function getPow(a, b = 1 ) {
//     return a**b
// }
// console.log(getPow(2));

// let exponent = 2
// function number(base, exponent = 1) {
//     return base ** exponent
// }
// console.log(number(2,3));


//Напишите функцию, которая принимает массив целых чисел и возвращает среднее арифметическое*.

//const numbersArray = [1, 2, 3]; //2

//const elementsQuantity = numbersArray.length;

// const numArray = [1, 2, 3];
// function arithmeticMean(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         //sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(arithmeticMean(numArray));

// let myNumbers = [1, 2, 3]
// function getAverage(numbers) {
//     let sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return sum / numbers.length;
// }

//const result = getAverage(myNumbers);
// console.log(result);


// console.log(getSum(2, 3));

// function getSum(a, b) {
//   return a + b;
// }



// const showText = function(text) {
//   console.log(text);
// };

// showText('example');

// console.log(getSum(2, 3));

// const getSum = function (a = 0, b = 0) {
//   return a + b;
// }

// console.log(getSum());

// (function () {
//     console.log('Hi!')
// })();

// const getSum = function (a = 0, b = 0) {
//   return a + b;
// }

// const getSum2 = getSum;

// console.log(getSum2(5, 10));


//полная запись
// const getSum = (a = 0, b = 0) => {
//     return a + b;
// } 

//сокращенный вариант
// const getSum = (a, b) => a + b;

// const printText = text => console.log('Example: ', text);

// printText('Lorem ipsum...')

// const printString = (str, n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// };
// printString('Привет', 3);

// const showObjectNTimes = (str, n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// }
// showObjectNTimes("Привет", 3)

// let a = 'Privet'
// let n = 4
// const sayStr = (a, n) => {
//     for (let i = 0 ; i < n; i++){
//         console.log(a)
//     }
// }
// sayStr(a, 5);


const findVowels = (letter) => {
    // let lettersArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    // console.log(lettersArr.includes(letter));
    // for (let i = 0; i < lettersArr.length; i++) {
    //     if (letter === lettersArr[i]) {
    //         console.log(true);
    //         return;
    //     }
    // }
    // console.log(false);
}

findVowels('и');
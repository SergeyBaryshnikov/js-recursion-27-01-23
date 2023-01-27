"use strict";
// обробляємо помилки!
// виклик робимо в try/catch/

// написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
// кількість пар дорівнює прийнятому аргументу.
// якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
// //pairBrickets(4) => '(((())))'

// //pairBrickets(-4) => '()'
// //pairBrickets('qwe') => throw

/**
 *
 * @param {number} num
 * @returns {string}
 */
const pairBrickets = (num) => {
  if (typeof num !== "number") throw new TypeError("num must be number");
  if (num > 10000) throw new RangeError("num must be less than 10000");
  if (num <= 1) return "()";
  return "(" + pairBrickets(num - 1) + ")";
};

try {
  console.log(pairBrickets(11));
} catch (error) {
  console.log(error);
}

// написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// // getDivider(24, 15) -> 3
// // getDivider(3, 3) -> 3
// // getDivider(7, 3) -> 1

// Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
// Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const getDivider = (num1, num2) => {
  if (typeof num1 !== "number") throw new TypeError("num1 must be number");
  if (typeof num2 !== "number") throw new TypeError("num2 must be number");
  if (num1 < 0) num1 = -num1;
  if (num2 < 0) num2 *= -1;
  if (num1 === 0 || num2 === 0) return num1 || num2;
  if (num1 === num2) return num1;
  num1 > num2 ? (num1 -= num2) : (num2 -= num1);
  return getDivider(num1, num2);
};

try {
  console.log(getDivider(24, -15));
} catch (error) {
  console.log(error);
}

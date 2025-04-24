//! Завдання 4

//? У вас є такі функції JavaScript:

// функція  showMessage ( повідомлення ) {
//    консоль . журнал (повідомлення);
// }

// функція  calc ( num1, num2 ) {
//    return num1 + num2;
// }

// функція  customError () {
//    викинути  нову  помилку ( 'Помилка' );
// }

//? Як ви вкажете типи аргументів і значення цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error(`Спокійно, ця Помилка під контролем!`);
}

console.log(`Базові типи. Завдання 4:`);

console.log(`showMessage:`);
showMessage(`My message!`);
console.log(`calc:`, calc(7, 8));

try {
  console.log(`customError:`, customError());
} catch (error) {
  console.error(`customError:`, (error as Error).message);
}

console.log(`Програма продовжує виконання...`);
console.log(` `);

//! Завдання 3

//? Створіть зміну, яка може Публикувати або рядок, або число (тип союзу)?
//? Також, оголосіть зміну, яка може надрукувати лише одне з двох можливих рядкових значень:
//?  'enable' або 'disable' (літеральний тип).

let input: string | number = `two`;

console.log(`Базові типи. Завдання 3:`);
console.log(`Змінна input приймає значення string:`, input);

input = 2;
console.log(`Змінна input приймає значення number:`, input);

let literalType: `enable` | `disable`;
console.log(`Літеральний тип:`, (literalType = `enable`));
console.log(`Літеральний тип:`, (literalType = `disable`));
console.log(` `);

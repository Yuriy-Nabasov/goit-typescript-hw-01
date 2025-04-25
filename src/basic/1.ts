//! Завдання 1
//? Є наступний код JavaScript:

// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;
// const callback = (a) => {
//   return 100 + a;
// };

//? Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log(`Базові типи. Завдання 1:`);
console.log(`age =`, age);
console.log(`username =`, username);
console.log(`toggle =`, toggle);
console.log(`empty =`, empty);
console.log(`callback =`, callback(10));
console.log(` `);

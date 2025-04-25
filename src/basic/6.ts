//! Завдання 6

//? Створіть інтерфейс User для типізації об'єктів, які складаються з таких властивостей.
//? Зверніть увагу, що адреса є необов'язковою властивістю.

// const mango = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const poly = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
// };

interface User {
  name: string;
  age: number;
  email: string;
  adress?: {
    city: string;
    country: string;
  };
}

const mango: User = {
  name: "Манго",
  age: 30,
  email: "john@example.com",
  adress: {
    city: "Нью-Йорк",
    country: "США",
  },
};

const poly: User = {
  name: "Полі",
  age: 23,
  email: "mary@example.com",
};

console.log(`Базові типи. Завдання 6:`);
console.log(mango);
console.log(poly);
console.log(` `);

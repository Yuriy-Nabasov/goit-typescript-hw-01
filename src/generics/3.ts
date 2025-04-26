//! Завдання 3

//? У вас є функція merge, яка поєднує два об'єкти. Використовуйте генерики,
//? щоб вказати, що ці об’єкти можуть бути будь-якого типу.

// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const user = { name: "Oksana", age: 24 };
const location = { city: "Kharkiv", country: "Ukraine" };

const userInfo = merge(user, location);

console.log(`Дженерики. Завдання 3:`, userInfo);
console.log(` `);

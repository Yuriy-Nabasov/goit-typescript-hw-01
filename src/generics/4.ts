//! Завдання 4

//? Ви маєте форму реєстрації користувача.
//? Іноді потрібно заповнити форму даними користувача для оновлення його профілю.
//? Однак вам не завжди потрібно заповнити всі поля. Наприклад,
//? користувач може хотіти оновити лише свою електронну адресу та пароль,
//? залишивши ім'я та ще ім'я без змін.

//? Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  console.log("Creating or updating user with values:", initialValues);
}

console.log(`Дженерики. Завдання 4:`);

createOrUpdateUser({
  name: "Lesya",
  surname: "Ukrainka",
  email: "lesya.ukrainka@ukraine.com",
  password: "password",
});

createOrUpdateUser({
  email: "best.lesya.ukrainka@ukraine.com",
  password: "Victory",
});

console.log(` `);

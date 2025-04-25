//! Завдання 6

//? У вас є тип Form , який містить інформацію про форму, включаючи поле errors.
//? Ви створите новий тип Params , який включає всі поля з Form , крім errors.

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

//? Реалізуйте Params так,
//? щоб унеможливити поле 'errors' з типу Form
// type Params = Form;

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const exampleParams: Params = {
  email: "lesya.ukrainka@ukraine.com",
  firstName: "Lesya",
  lastName: "Ukrainka",
  phone: "+38-050-55-77-888",
};

console.log(`Дженерики. Завдання 6:`, exampleParams);
console.log(` `);

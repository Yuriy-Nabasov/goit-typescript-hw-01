//! Завдання 5

//? У вас є перелік UserRole , який використовується для класифікації користувачів
//?  у вашій додатку. Ви хочете створити об’єкт RoleDescription , який розмістить кожну роль користувача з її описом.

// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log(`Дженерики. Завдання 5:`);
console.log(RoleDescription[UserRole.admin]);
console.log(RoleDescription[UserRole.editor]);
console.log(RoleDescription[UserRole.guest]);
console.log(` `);

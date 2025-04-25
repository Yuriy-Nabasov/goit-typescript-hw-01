//! Завдання 5

//? Типізуйте функцію isWeekend , яка вимагає день тижня з переліком DayOfWeek
//? і повертає логічне значення, яке вказує, чи це день робочий чи вихідний.

// enum  DayOfWeek  {
// Monday,
// Tuesday,
// Wednesday,
// Thursday,
// Friday,
// Saturday,
// Sunday
// }

// const  isWeekend  =  ( day )  =>  {
// }

enum DayOfWeek {
  Monday = `Monday`,
  Tuesday = `Tuesday`,
  Wednesday = `Wednesday`,
  Thursday = `Thursday`,
  Friday = `Friday`,
  Saturday = `Saturday`,
  Sunday = `Sunday`,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log(`Базові типи. Завдання 5:`);
console.log(
  `${DayOfWeek.Monday} це вихідний день -`,
  isWeekend(DayOfWeek.Monday)
);
console.log(
  `${DayOfWeek.Tuesday} це вихідний день -`,
  isWeekend(DayOfWeek.Tuesday)
);
console.log(
  `${DayOfWeek.Wednesday} це вихідний день -`,
  isWeekend(DayOfWeek.Wednesday)
);
console.log(
  `${DayOfWeek.Thursday} це вихідний день -`,
  isWeekend(DayOfWeek.Thursday)
);
console.log(
  `${DayOfWeek.Friday} це вихідний день -`,
  isWeekend(DayOfWeek.Friday)
);
console.log(
  `${DayOfWeek.Saturday} це вихідний день -`,
  isWeekend(DayOfWeek.Saturday)
);
console.log(
  `${DayOfWeek.Sunday} це вихідний день -`,
  isWeekend(DayOfWeek.Sunday)
);
console.log(` `);

//! Завдання 2

//? У вас є тип AllType . Існує функція compare, яка вимагає двох об'єктів.
//? Ці об'єкти складаються з поля AllType. Ваше завдання – використовувати Pick
//? і generics для вказівки, що поля цих параметрів належать AllType .
//? Функція compare повинна повернути AllType .

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare<T extends TopType, B extends BottomType>(
  top: T,
  bottom: B
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top: TopType = {
  name: "Ukraine",
  color: "yellow-blue",
};

const bottom: BottomType = {
  position: 1,
  weight: 40000000,
};

const result = compare(top, bottom);

console.log(`Дженерики. Завдання 2:`, result);
console.log(` `);

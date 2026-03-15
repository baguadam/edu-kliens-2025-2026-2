const username: string = "Valami";
const age: number = 24;
const isTired: boolean = true;

let myVar: string;

myVar = "Majom";

console.log(myVar);

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 6));

interface User {
  name: string;
  age: number;
}

type UserType = User | null | string;

let myUser: UserType;
myUser = { name: "Sanyi", age: 30 };
myUser = null;

let numbers: number[];
let numArray: Array<number>;

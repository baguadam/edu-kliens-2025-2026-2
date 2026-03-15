// string, number, boolean
const myName = "Barna";
const age = 24;
const isWorking = true;

let favouriteFood: string[];
let favFoodArray: Array<string>;

type WorkType = string | null | undefined;

let workplace: WorkType;
workplace = null;
workplace = "BR";

const add = (a: number, b: number): number => a + b;

console.log(myName, age, isWorking);
console.log(add(6, 5));

interface Person {
  name: string;
  age: number;
  isWorking: boolean;
  favFood?: string[];
}

const myPerson: Person = {
  name: "Kriszta",
  age: 26,
  isWorking: false,
};

console.log(myPerson.name);

// transpiling 


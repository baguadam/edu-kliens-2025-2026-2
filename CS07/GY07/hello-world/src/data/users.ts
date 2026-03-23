export interface User {
  id: string;
  name: string;
  age: number;
  hasStrava: boolean;
}

const users: User[] = [
  { id: "1", name: "Barna", age: 24, hasStrava: true },
  { id: "2", name: "Matyi", age: 25, hasStrava: false },
  { id: "3", name: "Eszter", age: 21, hasStrava: true },
];

export default users;

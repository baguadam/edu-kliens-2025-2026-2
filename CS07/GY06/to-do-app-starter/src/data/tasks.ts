export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: 1, title: "Bemenni kétszer az irodába", completed: false },
  { id: 2, title: "Egyenesbe jönni a tárgyaimmal", completed: false },
  { id: 3, title: "Elmenni csütörtöki focira", completed: true },
  { id: 4, title: "Logolni valamit Stravara", completed: true },
];

export default tasks;

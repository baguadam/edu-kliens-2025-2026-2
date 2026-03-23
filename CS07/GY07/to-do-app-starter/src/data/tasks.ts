import taskData from "./tasks.json";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = taskData;
export default tasks;

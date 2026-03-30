import TaskList from "./components/TaskList";
import "./App.css";

import { useState } from "react";
import tasks from "./data/tasks";
import Statistics from "./components/Statistics";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  // computer values
  const taskCount = taskList.length;
  const completedCount = taskList.filter((t) => t.completed).length;

  const handleRemoveClick = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompletedClick = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id !== id ? task : { ...task, completed: !task.completed },
      ),
    );
  };

  return (
    <div className="container">
      <h1>📝 Tennivalók</h1>

      {taskCount > 0 && (
        <Statistics taskCount={taskCount} completedCount={completedCount} />
      )}

      <TaskList
        taskList={taskList}
        onRemoveClick={handleRemoveClick}
        onCompletedClick={handleCompletedClick}
      />
    </div>
  );
}

export default App;

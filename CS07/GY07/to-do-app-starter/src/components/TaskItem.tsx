function TaskItem() {
  return (
    <div className={`task-item completed}`}>
      <input onChange={() => console.log("CHECKBOX")} type="checkbox" checked />
      <span>Feladat</span>
      <button onClick={() => console.log("TÖRLÉS")}>✕</button>
    </div>
  );
}

export default TaskItem;

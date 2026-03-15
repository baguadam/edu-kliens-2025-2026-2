import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h1>Template</h1>
      <Hello name="Matyi" age={18} />
      <Hello name="Sanyi" age={15} />
      <Hello name="Ági" age={20} />
    </div>
  );
}

export default App;

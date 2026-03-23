import Hello from "./components/Hello";
import UserList from "./components/UserList.tsx";
import users from "./data/users.ts";

function App() {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <Hello name="Sanyi" age={15} onClick={handleButtonClick} sex="male" />
      <UserList users={users} />
    </>
  );
}

export default App;

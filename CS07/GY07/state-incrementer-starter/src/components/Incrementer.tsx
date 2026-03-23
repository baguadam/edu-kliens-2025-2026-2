import { useState } from "react";

const Incrementer = () => {
  const [count, setCount] = useState(0);

  const handleIncrementTwiceClick = () => {
    console.log("INCREMENT CLICKED");
  };

  return (
    <>
      <span>Érték: {count}</span>
      <button onClick={handleIncrementTwiceClick}>+2</button>
    </>
  );
};

export default Incrementer;

interface HelloProps {
  name: string;
  age: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sex?: string;
  children?: React.ReactNode;
}

const Hello = ({ name, age, onClick, children }: HelloProps) => {
  if (age < 18) {
    return <h1>HALLÓ, KISKORÚ VAGY!</h1>;
  }

  return (
    <>
      <h1 className={`${age > 25 ? "highlighted" : ""}`}>
        {name}, életkor: {age}
      </h1>
      <button onClick={onClick}>LOGOL</button>
      {children}
    </>
  );
};

export default Hello;

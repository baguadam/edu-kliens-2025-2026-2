interface HelloProps {
  name: string;
  age: number;
}

const Hello = (props: HelloProps) => {
  return props.age < 18 ? <h1>Kiskorú vagy!</h1> : <h1>Üdv, {props.name}</h1>;
};

export default Hello;

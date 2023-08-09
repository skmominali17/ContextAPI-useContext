import { useContext } from "react";
import { Age, Name, Occup } from "./App";
const CompC = () => {
  const name = useContext(Name);
  const age = useContext(Age);
  const occup = useContext(Occup);
  return (
    <div>
      <h1>
        Hii My Name is {name}, I am {age} years old. By Proffesion, I am {occup}
        .
      </h1>
    </div>
  );
};

export default CompC;

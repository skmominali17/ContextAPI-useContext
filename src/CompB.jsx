import { Age, Name } from "./App";

const CompB = () => {
  return (
    <div>
      <Name.Consumer>
        {(name) => {
          return (
            <Age.Consumer>
              {(age) => {
                return (
                  <h1>
                    Hii My Name is {name}, I am {age} years old.
                  </h1>
                );
              }}
            </Age.Consumer>
          );
        }}
      </Name.Consumer>
    </div>
  );
};

export default CompB;

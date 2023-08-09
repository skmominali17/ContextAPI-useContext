import { createContext } from "react";
import CompA from "./CompA";
import "./styles.css";

const Age = createContext();
const Name = createContext();
const Occup = createContext();
export default function App() {
  return (
    <div className="App">
      <Name.Provider value="Momin">
        <Age.Provider value="19">
          <Occup.Provider value="Engineer">
            <CompA />
          </Occup.Provider>
        </Age.Provider>
      </Name.Provider>
    </div>
  );
}

export { Age, Name, Occup };

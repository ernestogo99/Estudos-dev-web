import { Children } from "react";
import Escanor from "./escanor.jpg";
import Estarossa from "./estarossa.jpg";

const Hero = ({ nome }) => {
  return (
    <div>
      <h1>O nome do heroi é: {nome}</h1>
      <img src={Escanor} alt="escanor" style={{ width: "150px" }}></img>
    </div>
  );
};

const Enemy = ({ nome }) => {
  return (
    <div>
      <h1>O nome do vilão é: {nome}</h1>
      <img src={Estarossa} alt="estarossa" style={{ width: "150px" }}></img>
    </div>
  );
};

const Arena = ({ nome }) => {
  return (
    <div>
      <h1>Arena: {nome}</h1>
      <Hero nome="escanor"></Hero>
      <Enemy nome="estarossa"></Enemy>
    </div>
  );
};

const World = ({ children }) => {
  return <div>{children}</div>;
};

export { Hero, Enemy, World, Arena };

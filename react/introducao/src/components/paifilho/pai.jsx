import { useState } from "react";
import Filhoo from "./filho";

const Paii = () => {
  const [nome, Setnome] = useState("teste");
  const mensagem_filho = (msg) => {
    alert(`meu filho disse ${msg}`);
    Setnome("Ernesto");
  };
  return (
    <div>
      <h1>pai {nome}</h1>
      <Filhoo falarcompai={mensagem_filho}></Filhoo>
    </div>
  );
};

export default Paii;

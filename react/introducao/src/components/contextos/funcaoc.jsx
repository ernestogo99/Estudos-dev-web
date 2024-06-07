import Funcaod from "./funcaod";
import { useContext } from "react";
import Cor_contexto from "./meucontexto";
const Funcaoc = () => {
  const { cor, nome, cor2 } = useContext(Cor_contexto); //quebrando o objeto
  return (
    <div>
      <h1 style={{ backgroundColor: cor2 }}>Função c de nome {nome}</h1>
      <Funcaod></Funcaod>
    </div>
  );
};

export default Funcaoc;

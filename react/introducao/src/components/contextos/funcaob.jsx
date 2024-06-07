import Cor_contexto from "./meucontexto";
import { useContext } from "react";

const Funcaob = () => {
  const { cor, nome, cor2 } = useContext(Cor_contexto);
  return (
    <div>
      <h1 style={{ backgroundColor: cor }}>Função b de nome: {nome} </h1>
    </div>
  );
};

export default Funcaob;

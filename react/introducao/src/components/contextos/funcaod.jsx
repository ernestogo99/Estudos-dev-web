import { useContext } from "react";
import Cor_contexto from "./meucontexto";

const Funcaod = () => {
  const { nome, cor, cor2 } = useContext(Cor_contexto);
  return (
    <div>
      <h1 style={{ backgroundColor: cor2 }}>Função d de nome: {nome}</h1>
    </div>
  );
};

export default Funcaod;

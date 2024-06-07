import Pokemon from "./context";
import Neto from "./neto";
import { useContext } from "react";
const Filho = () => {
  const numero = useContext(Pokemon);
  return (
    <div>
      <h1>Componente filho</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          numero + 1
        }.png`}
        alt="pokemon"
      ></img>
      <Neto></Neto>
    </div>
  );
};

export default Filho;

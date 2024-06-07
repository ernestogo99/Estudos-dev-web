import Pokemon from "./context";
import { useContext } from "react";
const Neto = () => {
  const numero = useContext(Pokemon);
  return (
    <div>
      <h1>Componente neto</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          numero + 2
        }.png`}
        alt="pokemon"
      ></img>
    </div>
  );
};

export default Neto;

import Pokecontext from "./contextu";
import { useContext } from "react";
import Netoo from "./filhoo";

const Paii = () => {
  const contador = useContext(Pokecontext);
  return (
    <div>
      <h1>Componente pai</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          contador + 1
        }.png`}
      ></img>
      <Netoo></Netoo>
    </div>
  );
};

export default Paii;

import Pokecontext from "./contextu";
import { useContext } from "react";

const Netoo = () => {
  const contador = useContext(Pokecontext);
  return (
    <div>
      <h1>Componente neto</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          contador + 2
        }.png`}
      ></img>
    </div>
  );
};
export default Netoo;

import Avo from "../q2/avo";
import Pokecontext from "./contextu";
import Paii from "./paii";
import { useState } from "react";

const Avoo = () => {
  const [contador, setcontador] = useState(1);

  const aumentar = () => {
    setcontador(contador + 1); // tenho que usar a funcao setcontador para modificar a variavel contador
  };
  return (
    <Pokecontext.Provider value={contador}>
      <div>
        <h1>Componente avo</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
        ></img>
        <button onClick={aumentar}>Aumentar numero</button>
      </div>
      <Paii></Paii>
    </Pokecontext.Provider>
  );
};

export default Avoo;

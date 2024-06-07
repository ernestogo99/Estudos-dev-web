import Pokemon from "./context";
import Filho from "./filho";
const Avo = () => {
  const numero = 1;
  return (
    <Pokemon.Provider value={numero}>
      <div>
        <h1>Componente avo</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
          alt="pokemon"
        ></img>
        <Filho></Filho>
      </div>
    </Pokemon.Provider>
  );
};

export default Avo;

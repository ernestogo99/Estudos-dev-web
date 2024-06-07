import { useState } from "react";

const Questao2 = () => {
  const [virar, setvirar] = useState(false);
  const pokeimagem = () => {
    if (virar === true) {
      return (
        <div>
          <h1>Frente</h1>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            }
          ></img>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Costas</h1>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
            }
          ></img>
        </div>
      );
    }
  };

  const clicar = () => {
    setvirar((prev) => !prev);
  };
  return (
    <div>
      <h1>Questão2</h1>
      {pokeimagem()}
      <button
        onClick={() => {
          clicar();
        }}
      >
        Virar
      </button>
    </div>
  );
};

export default Questao2;

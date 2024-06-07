import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [id, setid] = useState(1);
  const [nome, setnome] = useState("");
  const [imagem, setimagem] = useState("");
  const [imagem2, setimagem2] = useState("");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resposta) => {
        setnome(resposta.data.name);
        setimagem(resposta.data.sprites.front_default);
        setimagem2(resposta.data.sprites.back_default);
      })
      .catch((error) => console.log(error));
  }, [id]); // esse [] emula um construtor, assim so ira executar uma vez

  return (
    <div>
      <h1>Nome:{nome}</h1>
      <img src={imagem} style={{ width: "400px" }}></img>
      <img src={imagem2} style={{ width: "400px" }}></img>

      <button
        onClick={() => {
          setid((prev) => prev + 1);
        }}
      >
        Próximo pokemon
      </button>
      <button
        onClick={() => {
          setid((prev) => prev - 1);
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default Pokemon;

import { useEffect, useState } from "react";

const Cidadesv1 = () => {
  const [flag, setflag] = useState(false);
  const [voto, setvoto] = useState([
    { nome: "fortaleza", votos: 0 },
    { nome: "beberibe", votos: 0 },
    { nome: "jaguaruana", votos: 0 },
    { nome: "aquiraz", votos: 0 },
  ]);
  const votar = (nome) => {
    /*for (let i = 0; i < voto.length; ++i) {
      if (voto[i].nome === cidade) {
        voto[i].votos = voto[i].votos + 1;
      }
    }
    */
    const index = voto.findIndex((cidade) => {
      return cidade.nome === nome;
    });
    voto[index].votos = voto[index].votos + 1;
    setflag((prev) => !prev);
  };
  //outra solução para votar
  const votarcidadev2 = (nome) => {
    const newcidades = voto.map((cidade) => {
      if (cidade.nome === nome) {
        return { ...cidade, votos: cidade.votos + 1 };
      } else {
        return { ...cidade };
      }
    });
    setvoto(newcidades);
  };

  return (
    <div>
      <h1>Voto cidades</h1>
      <h3>
        {voto[0].nome}: {voto[0].votos}
      </h3>
      <button
        onClick={() => {
          votarcidadev2("fortaleza");
        }}
      >
        votar em fortaleza
      </button>
      <h3>
        {voto[1].nome}: {voto[1].votos}
      </h3>
      <button
        onClick={() => {
          votarcidadev2("beberibe");
        }}
      >
        votar em beberibe
      </button>
      <h3>
        {voto[2].nome}: {voto[2].votos}
      </h3>
      <button
        onClick={() => {
          votarcidadev2("jaguaruana");
        }}
      >
        votar em jaguaruana
      </button>
      <h3>
        {voto[3].nome}: {voto[3].votos}
      </h3>
      <button
        onClick={() => {
          votarcidadev2("aquiraz");
        }}
      >
        votar em aquiraz
      </button>
    </div>
  );
};

export default Cidadesv1;

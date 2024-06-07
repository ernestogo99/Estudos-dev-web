import { useEffect, useState } from "react";

const Cidades = () => {
  const [mais, setmais] = useState("");
  const [menos, setmenos] = useState("");
  const [voto, setvoto] = useState({
    fortaleza: 0,
    beberibe: 0,
    jaguaruana: 0,
    aquiraz: 0,
  });
  const votar = (cidade) => {
    setvoto({
      ...voto, // mantém os votos existentes
      [cidade]: voto[cidade] + 1, // incrementa o voto para a cidade específica
    });
  };
  useEffect(() => {
    const votos = Object.values(voto);
    const maisvotada = Math.max(...votos);
    const cidade_maisvotada = Object.keys(voto).find(
      (cidade) => voto[cidade] === maisvotada
    );
    setmais(cidade_maisvotada);
    const menosvotada = Math.min(...votos);
    const cidade_menosvotada = Object.keys(voto).find((cidade) => {
      return voto[cidade] === menosvotada;
    });
    setmenos(cidade_menosvotada);
  }, [voto]);

  return (
    <div>
      <h1>Fortaleza: {voto.fortaleza} </h1>
      <button
        onClick={() => {
          votar("fortaleza");
        }}
      >
        Votar em fortaleza
      </button>
      <h1>Beberibe: {voto.beberibe}</h1>
      <button
        onClick={() => {
          votar("beberibe");
        }}
      >
        Votar em beberibe
      </button>
      <h1>Jaguaruana: {voto.jaguaruana}</h1>
      <button
        onClick={() => {
          votar("jaguaruana");
        }}
      >
        Votar em jaguaruana
      </button>
      <h1>Aquiraz: {voto.aquiraz}</h1>
      <button
        onClick={() => {
          votar("aquiraz");
        }}
      >
        Votar em aquiraz
      </button>
      <h1>Cidade mais votada: {mais} </h1>
      <h1>Cidade menos votada: {menos}</h1>
    </div>
  );
};

export default Cidades;

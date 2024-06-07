import { useEffect, useState } from "react";

const Questao1a = () => {
  const [medias, setmedias] = useState([]);
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];
  console.log(medias);
  const imprimir = () => {
    return medias.map((item, index) => {
      if (item.media >= 6) {
        return (
          <div key={index}>
            <h1>{item.nome}</h1>
          </div>
        );
      }
    });
  };
  return (
    <div>
      <h1>Item A</h1>
      {imprimir()}
      <Questao1b alunos={alunos} setmedias={setmedias}></Questao1b>
    </div>
  );
};

function Questao1b({ alunos, setmedias }) {
  useEffect(() => {
    const media_nome = alunos.map((item) => {
      const media = (item.notas.ap1 + item.notas.ap2) / 2;
      return { nome: item.nome, media: media };
    });
    setmedias(media_nome);
  }, []);
  return (
    <div>
      <h1>Item b</h1>
    </div>
  );
}

export default Questao1a;

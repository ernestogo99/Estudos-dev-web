import { useState } from "react";

const Pai = () => {
  const [maior, setmaior] = useState(0);
  const [menor, setmenor] = useState(0);
  const [media, setmedia] = useState(0);
  const mensagem_a = (maior) => {
    setmaior(maior);
  };
  const mensagem_b = (menor) => {
    setmenor(menor);
  };
  const mensagem_c = (media) => {
    setmedia(media);
  };
  return (
    <div>
      <h1>Componente pai</h1>
      <h1>maior: {maior} </h1>
      <h1>menor: {menor}</h1>
      <h1>média: {media}</h1>
      <FilhoA mensagemA={mensagem_a} vetor={[1, 2, 5, 4, 3]}></FilhoA>
      <FilhoB mensagemB={mensagem_b} vetor={[1, 2, 5, 4, 3]}></FilhoB>
      <FilhoC mensagemC={mensagem_c} vetor={[1, 2, 5, 4, 3]}></FilhoC>
    </div>
  );
};

const FilhoA = ({ vetor, mensagemA }) => {
  const calcular_maior = () => {
    const maior = Math.max(...vetor);
    mensagemA(maior);
  };

  return (
    <div>
      <h1>Filho A</h1>
      <button onClick={() => calcular_maior()}>calcular maior</button>
    </div>
  );
};

const FilhoB = ({ vetor, mensagemB }) => {
  const calcularmenor = () => {
    const menor = Math.min(...vetor);
    mensagemB(menor);
  };
  return (
    <div>
      <h1>Filho B</h1>
      <button
        onClick={() => {
          calcularmenor();
        }}
      >
        Calcular menor
      </button>
    </div>
  );
};

const FilhoC = ({ vetor, mensagemC }) => {
  const calcularmedia = () => {
    let soma = 0;
    for (let i = 0; i < vetor.length; ++i) {
      soma += vetor[i];
    }
    let media = soma / vetor.length;
    mensagemC(media);
    return media;
  };
  return (
    <div>
      <h1>Filho C</h1>
      <button
        onClick={() => {
          calcularmedia();
        }}
      >
        Calcular media
      </button>
    </div>
  );
};

export default Pai;

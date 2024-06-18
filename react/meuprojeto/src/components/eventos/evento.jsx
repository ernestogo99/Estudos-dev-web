import Botao from "./botao";
const Evento = ({ numero }) => {
  const meuevento = () => {
    window.alert(`o número ${numero} foi ativado`);
  };

  const evento2 = () => {
    window.alert("evento 2 ativado");
  };

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Botao event={meuevento} text="Primeiro evento"></Botao>
      <Botao event={evento2} text="segundo  evento"></Botao>
    </div>
  );
};

export default Evento;

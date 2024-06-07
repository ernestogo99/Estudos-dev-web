const Filho = ({ altura, peso }) => {
  const imc = peso / (altura * altura);
  let mensagem;
  if (imc < 18) {
    mensagem = <h3>Abaixo do peso</h3>;
  } else if (imc > 25) {
    mensagem = <h3>Acima do peso</h3>;
  } else {
    mensagem = <h3>Peso ideal</h3>;
  }
  return (
    <div>
      <h1>a minha altura é {altura}</h1>
      <h1> meu peso é {peso}</h1>
      <h1>o meu imc é: {imc}</h1>
      {mensagem}
    </div>
  );
};

export default Filho;

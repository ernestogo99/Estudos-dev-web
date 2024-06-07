const Calculadora = () => {
  const somar = (x, y) => {
    return x + y;
  };

  const subtrair = (x, y) => {
    return x - y;
  };

  const multiplicacao = (x, y) => {
    return x * y;
  };
  const dividir = (x, y) => {
    return x / y;
  };

  const chamardivisao = (funcao_de_dividir) => {
    return funcao_de_dividir(30, 5);
  };
  return (
    <div>
      <h1>O resultado da soma é: {somar(3, 4)} </h1>
      <h1>o resultado da subtração é: {subtrair(4, 3)}</h1>
      <h1>o resultado da multiplicacao é: {multiplicacao(4, 3)}</h1>
      <h1>o resultado da divisão é: {chamardivisao(dividir)}</h1>
      <h1>
        O resultado da divisão é:
        {chamardivisao((x, y) => {
          return x / y;
        })}
      </h1>
    </div>
  );
};
// no segundo chamar divisao, usamos a funcao anonima, passando uma função como parametro
//dentro da função que recebeu a função,executamos ela como parametro
export default Calculadora;

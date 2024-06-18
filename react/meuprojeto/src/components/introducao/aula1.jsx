const Aula1 = () => {
  const name = "ernesto";
  const novonome = name.toUpperCase();
  const soma = (a, b) => {
    return a + b;
  };
  const url = "https://via.placeholder.com/150";
  return (
    <div>
      <h1>Alterando o jsx</h1>
      <p>Meu nome é: {name}</p>
      <p>Nome maisculo: {novonome}</p>
      <p>Soma: {soma(2, 3)}</p>
      <img src={url} alt="minha imagem" />
    </div>
  );
};

export default Aula1;

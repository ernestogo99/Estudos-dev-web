const Dados2 = (props) => {
  const { nome, curso, faculdade } = props;
  return (
    <div>
      <h1>O meu nome com props é: {nome}</h1>
      <h1>o meu curso com props é: {curso}</h1>
      <h1>minha faculdade com props é: {faculdade}</h1>
    </div>
  );
};

export default Dados2;

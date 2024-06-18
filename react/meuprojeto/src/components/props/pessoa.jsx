const Pessoa = ({ nome, idade, profissao, foto }) => {
  //posso descontruir o objeto ja nos parametros
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão:{profissao}</p>
    </div>
  );
};

export default Pessoa;

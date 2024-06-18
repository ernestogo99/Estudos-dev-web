const Saudacao = ({ nome }) => {
  const gerarsaudacao = (algum_nome) => {
    return `olá, ${algum_nome}, tudo bem?`;
  };
  return <>{nome && <p>{gerarsaudacao(nome)}</p>}</>;
};

export default Saudacao;

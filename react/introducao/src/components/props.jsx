{
  /*const Props = (props) => {
  const renderizar_meu_nome = () => {
    return <span>Ernestogo</span>;
  };

  return (
    <div>
      <h1>Meu nome é: {renderizar_meu_nome()}</h1>
      <h1>meu nome, com props é: {props.nome}</h1>
   </div>
  );
};*/
}

//versão 2 quebrando o objeto json props
const Props = (props) => {
  const { nome, idade, curso } = props;
  return (
    <div>
      <h1>o meu nome é {nome}</h1>
      <h1>a minha idade é {idade}</h1>
      <h1>o meu curso é {curso}</h1>
    </div>
  );
};

// versão 3 , quebra o objeto na hora que recebe
// const props=({nome,idade,curso})=>{
//  resto do código
//}

export default Props;

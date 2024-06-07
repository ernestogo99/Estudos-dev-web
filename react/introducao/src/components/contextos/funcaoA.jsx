import Funcaob from "./funcaob";
import Funcaoc from "./funcaoc";
import Cor_contexto from "./meucontexto";
const FuncaoA = () => {
  const cor = "red";
  //envolver toda a arvore com o cor_contexto
  // assim funcao b e c terão acesso ao contexto
  // d tbm tera,pois ela é filho de c , que tem acesso

  return (
    <Cor_contexto.Provider value={{ cor: cor, nome: "Ernesto", cor2: "green" }}>
      <div>
        <h1 style={{ backgroundColor: cor }}>Função A</h1>
        <Funcaob></Funcaob>
        <Funcaoc></Funcaoc>
      </div>
    </Cor_contexto.Provider>
  );
};

export default FuncaoA;

import { Children, cloneElement } from "react";
//v0
//const Supermercado = ({ children, nome }) => {
//return (
//<div>
//<h1>Supermercado {nome}</h1>
//{children}
//</div>
//);
//};

//v1

/*const Supermercado = ({ children, nome }) => {
  return (
    <div>
      <h1>Supermercado: {nome}</h1>
      {Children.map(children, (filho) => {
        return <div style={{ backgroundColor: "red" }}>{filho}</div>;
      })}
    </div>
  );
};*/

//v2

const Supermercado = ({ children, nome }) => {
  return (
    <div>
      <h1>Supermercado: {nome}</h1>
      {Children.map(children, (filho) => {
        return cloneElement(filho, { supermercado: nome });
      })}
    </div>
  );
};

const Legume = ({ nome, supermercado }) => {
  return (
    <div>
      <h3>
        Nome do legume: {nome} do supermercado: {supermercado}
      </h3>
    </div>
  );
};

const Fruta = ({ nome }) => {
  return (
    <div>
      <h3>Nome da Fruta: {nome}</h3>
    </div>
  );
};

const Bebida = ({ nome }) => {
  return (
    <div>
      <h3>Nome da bebida: {nome}</h3>
    </div>
  );
};

export { Supermercado, Legume, Fruta, Bebida };

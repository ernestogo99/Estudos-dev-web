import React from "react";

const dados = () => {
  return (
    <div>
      <h1>Meu nome é Ernesto</h1>
      <h1>Faço ciência da computação</h1>
      <h1>Estudo na UFC</h1>
    </div>
  );
};
//funcao normal

//function dados() {
//return (
//<div>
//<h1>Meu nome é ernesto</h1>
//<h1>Faço ciência da computação</h1>
//<h1>Estudo na UFC</h1>
//</div>
//);
//}

//arrow function sem return
const daados = () => (
  <div>
    <h1>Meu nome é Ernesto</h1>
    <h1>Faço Ciência da Computação</h1>
    <h1>Estudo na UFC</h1>
  </div>
);

// classe

class Dados extends React.Component {
  render() {
    return (
      <div>
        <h1>Meu nome é ernesto</h1>
        <h1>Faço ciência da computação</h1>
        <h1>Estudo na UFC</h1>
      </div>
    );
  }
}

export default Dados;

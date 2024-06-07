const Placamae = ({ nome, preço, exibir }) => {
  let mensagem;
  if (exibir === true) {
    mensagem = (
      <h1>
        Placamâe:{nome}, valor:{preço}
      </h1>
    );
  } else {
    mensagem = "nada";
  }
  return <div>{mensagem}</div>;
};

const Memoria = ({ nome, preço, exibir }) => {
  let mensagem;
  if (exibir === true) {
    mensagem = (
      <h1>
        Memoria:{nome}, valor:{preço}
      </h1>
    );
  } else {
    mensagem = "nada";
  }
  return <div>{mensagem}</div>;
};

const Placadevideo = ({ nome, preço, exibir }) => {
  let mensagem;
  if (exibir === true) {
    mensagem = (
      <h1>
        Placadevideo:{nome}, valor:{preço}
      </h1>
    );
  } else {
    mensagem = "nada";
  }
  return <div>{mensagem}</div>;
};

export { Placamae, Placadevideo, Memoria };

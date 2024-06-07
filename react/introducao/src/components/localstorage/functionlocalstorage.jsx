const Savedata = () => {
  const savedata = () => {
    const aluno = { nome: "ernesto", curso: "Ciência da computação" };

    localStorage.setItem("aluno01", JSON.stringify(aluno)); // colocar o que eu quero salvar
    sessionStorage.setItem("disciplina", "Desenvolvimento web");
  };

  return (
    <div>
      <h1>Salvando os dados</h1>
      {savedata()}
      <Loaddata></Loaddata>
    </div>
  );
};

const Loaddata = () => {
  // vai carregar os dados do aluno e retornar jsx
  const load = () => {
    const alunocarregado = JSON.parse(localStorage.getItem("aluno01"));
    return (
      <div>
        <h3>Nome:{alunocarregado.nome}</h3>
        <h3>Curso:{alunocarregado.curso}</h3>
      </div>
    );
  };
  // retorno principal
  return (
    <div>
      <h1>carregando</h1>
      {load()}
    </div>
  );
};

export default Savedata;

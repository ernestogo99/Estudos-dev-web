import { useState } from "react";

const Form = () => {
  const cadastrarUser = (event) => {
    event.preventDefault();
    console.log(`usuario: ${nome} foi cadastrado com a senha: ${senha}`);
    window.alert("usuario cadastrado");
  };

  const [nome, setnome] = useState("");
  const [senha, setsenha] = useState("");
  return (
    <div>
      <h1>meu cadastro</h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome"
            onChange={(e) => setnome(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="passoword"
            name="password"
            placeholder="digite sua senha"
            onChange={(e) => setsenha(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="cadastrar"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;

import { FormEvent, useState } from "react";

const Basico = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const handlesave = (event: FormEvent) => {
    event.preventDefault();
    console.log({ name, age });
  };

  return (
    <form onSubmit={handlesave}>
      <fieldset>
        <legend>Preencha o formulario</legend>

        <label>
          <span>Nome</span>
          <br />

          <input
            value={name}
            placeholder="nome"
            onChange={(event) => setname(event.target.value)}
          ></input>

          <br></br>
          <span>Digite o nome aqui</span>
        </label>

        <br></br>
        <br></br>

        <label>
          <span>idade</span>
          <br></br>

          <input
            type="number"
            value={age}
            placeholder="idade"
            onChange={(event) => setage(event.target.value)}
          ></input>

          <br></br>
          <span>Digite a idade aqui</span>
        </label>

        <br></br>
        <br></br>

        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
};

export default Basico;

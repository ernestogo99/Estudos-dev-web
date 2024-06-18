import { useState } from "react";

const Condicional = () => {
  const [email, setemail] = useState("");
  const [useremail, setuseremail] = useState("");

  const enviaremail = (event) => {
    event.preventDefault();
    setuseremail(email);
    console.log(useremail);
  };

  const limparemail = () => {
    setuseremail("");
  };

  return (
    <div>
      <h1>Cadastre seu email:</h1>
      <form>
        <input
          onChange={(event) => setemail(event.target.value)}
          type="email"
          placeholder="digite seu email"
        ></input>
        <button onClick={enviaremail}>Enviar email</button>
        {useremail && (
          <div>
            <p>O email do usuario é: {useremail}</p>
            <button onClick={limparemail}>limpar-email</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Condicional;

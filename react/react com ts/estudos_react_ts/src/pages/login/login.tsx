import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/pagina-inicial");
  };
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (window.confirm("vc é homem?")) {
      console.log("homem");
    } else {
      console.log("mulher");
    }
  }, []);

  useEffect(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  const handlesubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    console.log(senha);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>
          <span>Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
        </label>
        <label>
          <span>Senha</span>
          <input
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            type="password"
          ></input>
        </label>
        <button type="submit">Entrar</button>
      </form>

      <button onClick={handleclick}>voltar</button>
    </div>
  );
};

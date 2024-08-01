import { FormEvent, useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/buttonLogin";

import { useUsuarioLogado } from "../../shared/hooks";

export const Loginmemo = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/pagina-inicial");
  };
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const usuariologadoContext = useUsuarioLogado();
  //pegar a referencia do elemento html e usar em algum lugar
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  //permite a gente fazer calculos complexos e deixar ele armazenado
  const emailLength = useMemo(() => {
    console.log("executou");
    return email.length * 100;
  }, [email.length]);

  //quando o componente inicia pela primeira vez,ele atribui a função e guarda na memoria

  const handlesubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(email);
      console.log(senha);
      if (inputPasswordRef.current !== null) {
        inputPasswordRef.current.focus();
      }
    },
    [email, senha]
  );

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <p>quantidade de caracteres no email: {emailLength}</p>
        <p>{usuariologadoContext.nomeDousuario}</p>
        <InputLogin
          tipo="email"
          label="Email"
          value={email}
          onChange={(newvalue) => setEmail(newvalue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        ></InputLogin>
        <InputLogin
          ref={inputPasswordRef}
          tipo="password"
          label="Senha"
          value={senha}
          onChange={(newvalue) => setSenha(newvalue)}
        ></InputLogin>
        <button type="submit">Entrar</button>
        <ButtonLogin
          onClick={() => {
            window.alert("botao funcionando");
          }}
        >
          botao children
        </ButtonLogin>
      </form>

      <button onClick={handleclick}>voltar</button>
    </div>
  );
};

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const navigate = useNavigate();
  const contador = useRef({ counter: 0 });
  console.log(contador);

  const { logout, nomeDousuario } = useUsuarioLogado();
  return (
    <div>
      <p>Dashboard</p>

      <p>{nomeDousuario}</p>

      <p>Contador :{contador.current.counter}</p>
      <button
        onClick={() => {
          contador.current.counter++;
        }}
      >
        Somar
      </button>
      <button
        onClick={() => {
          console.log(contador.current.counter);
        }}
      >
        Somar e ver no console.log
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        ir para o login
      </button>
      <button
        onClick={() => {
          navigate("/login-memo");
        }}
      >
        ir para o login-memo
      </button>
      <button onClick={logout}>Logout</button>
      <button
        onClick={() => {
          navigate("/lista");
        }}
      >
        ir para a lista
      </button>
      <button
        onClick={() => {
          navigate("/lista-objeto");
        }}
      >
        ir para a lista com objetos
      </button>
      <button
        onClick={() => {
          navigate("/lista-json");
        }}
      >
        ir para a lista com json
      </button>
    </div>
  );
};

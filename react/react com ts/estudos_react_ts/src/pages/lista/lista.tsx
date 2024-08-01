import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Lista = () => {
  const navigate = useNavigate();
  const [lista, setlista] = useState<string[]>(["teste1", "teste2", "teste3"]);
  //toda vez que eu teclar alguma tecla,esse evento será executado
  const handleInputkeydow: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      if (event.key === "Enter") {
        if (event.currentTarget.value.trim().length === 0) return;

        const value = event.currentTarget.value;
        setlista((oldlista) => {
          //impedir valores repetidos
          if (oldlista.includes(value)) return oldlista;
          return [...oldlista, value];
        });
      }
    }, []);
  return (
    <div>
      <p>lista</p>
      <input onKeyDown={handleInputkeydow}></input>
      <ul>
        {lista.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          navigate("/pagina-inicial");
        }}
      >
        voltar para dashboard
      </button>
    </div>
  );
};

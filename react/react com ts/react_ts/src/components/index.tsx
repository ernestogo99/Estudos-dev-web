import React from "react";
import style from "./index.module.scss";

interface botaoprops {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Botao: React.FC<botaoprops> = ({ texto, type = "button", onClick }) => {
  return (
    <div>
      <button
        type={type}
        className={style.botao}
        style={{ backgroundColor: "blue" }}
        onClick={onClick}
      >
        {texto}
      </button>
    </div>
  );
};

export default Botao;

import Botao from "..";
import Relogio from "./relogio/relogio";
import style from "./cronometro.module.scss";
import { tempopara_segundo } from "../../common/utils/date";
import Itarefa from "../interfaces/tarefa";
import { useState, useEffect } from "react";

interface propscrono {
  selecionado: Itarefa | undefined;
  finalizar_tarefa: () => void;
}

const Cronometro = ({ selecionado, finalizar_tarefa }: propscrono) => {
  const [tempo, settempo] = useState<number>();

  const regressiva = (tempo: number = 0) => {
    setTimeout(() => {
      if (tempo > 0) {
        settempo(tempo - 1);
        return regressiva(tempo - 1);
      }
      finalizar_tarefa();
    }, 1000);
  };

  useEffect(() => {
    if (selecionado?.tempo) {
      settempo(tempopara_segundo(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      Tempo: {tempo} segundos
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}></Relogio>
      </div>
      <Botao onClick={() => regressiva(tempo)} texto="começar"></Botao>
    </div>
  );
};

export default Cronometro;

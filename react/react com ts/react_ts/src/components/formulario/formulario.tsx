import { useState, Dispatch, SetStateAction } from "react";
import Botao from "..";
import style from "./form.module.scss";
import Itarefa from "../interfaces/tarefa";
import { v4 as uuidv4 } from "uuid";
const Formulario = ({
  settarefas,
}: {
  settarefas: Dispatch<SetStateAction<Itarefa[]>>;
}) => {
  const [state, setstate] = useState({ tarefa: "", tempo: "00:00" });

  const adicionartarefa = (event: React.FormEvent) => {
    event.preventDefault();
    settarefas((prev) => [
      ...prev,
      { ...state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setstate({ tarefa: "", tempo: "00:00" });
    console.log(state);
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionartarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="o que você quer estudar?"
          required
          value={state.tarefa}
          onChange={(event) =>
            setstate({ ...state, tarefa: event.target.value })
          }
        ></input>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={state.tempo}
          onChange={(event) =>
            setstate({ ...state, tempo: event.target.value })
          }
        ></input>
      </div>
      <Botao type="submit" texto="adicionar"></Botao>
    </form>
  );
};

export default Formulario;

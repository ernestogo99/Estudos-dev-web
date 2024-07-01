import "./App.css";
import Cronometro from "./components/cronometro/cronometro";
import Formulario from "./components/formulario/formulario";
import Itarefa from "./components/interfaces/tarefa";
import Lista from "./components/lista/lista";
import style from "./components/pages/style.module.scss";
import { useState } from "react";
function App() {
  const [tarefas, settarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setselecionado] = useState<Itarefa>();

  const seleciona_tarefa = (tarefaselecionada: Itarefa) => {
    setselecionado(tarefaselecionada);
    settarefas((prev) =>
      prev.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaselecionada.id ? true : false,
      }))
    );
  };

  const finalizar_tarefa = () => {
    if (selecionado) {
      setselecionado(undefined);
      settarefas((prev) =>
        prev.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return { ...tarefa, selecionado: false, completado: true };
          }
          return tarefa;
        })
      );
    }
  };
  return (
    <div className={style.AppStyle}>
      <Formulario settarefas={settarefas}></Formulario>
      <Lista seleciona_tarefa={seleciona_tarefa} tarefas={tarefas}></Lista>
      <Cronometro
        finalizar_tarefa={finalizar_tarefa}
        selecionado={selecionado}
      ></Cronometro>
    </div>
  );
}

export default App;

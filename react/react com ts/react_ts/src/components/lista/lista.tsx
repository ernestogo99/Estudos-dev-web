import Item from "./item";
import style from "./lista.module.scss";
import Itarefa from "../interfaces/tarefa";

interface props {
  tarefas: Itarefa[];
  seleciona_tarefa: (tarefaselecionada: Itarefa) => void;
}

const Lista = ({ tarefas, seleciona_tarefa }: props) => {
  return (
    <div className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item} seleciona_tarefa={seleciona_tarefa} />
        ))}
      </ul>
    </div>
  );
};

export default Lista;

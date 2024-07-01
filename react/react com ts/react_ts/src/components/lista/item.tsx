import Itarefa from "../interfaces/tarefa";
import style from "./lista.module.scss";

interface propsitem extends Itarefa {
  seleciona_tarefa: (tarefaselecionada: Itarefa) => void;
}

const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  seleciona_tarefa,
}: propsitem) => {
  return (
    <li
      onClick={() => {
        !completado &&
          seleciona_tarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
          });
      }}
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;

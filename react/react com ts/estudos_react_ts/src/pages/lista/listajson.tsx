import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tarefaservice } from "../../shared/services/api/tarefas/TarefasService";
import { ApiErrorexception } from "../../shared/services/api/errorexception";

interface Itarefa {
  id: string;
  title: string;
  estacompleta: boolean;
}

export const Listajson = () => {
  const navigate = useNavigate();
  const [lista, setlista] = useState<Itarefa[]>([]);

  useEffect(() => {
    Tarefaservice.getAll().then((response) => {
      if (response instanceof ApiErrorexception) {
        alert(response.message);
      } else {
        setlista(response);
      }
    });
  }, []);

  //toda vez que eu teclar alguma tecla,esse evento será executado
  const handleInputkeydow: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        if (event.key === "Enter") {
          if (event.currentTarget.value.trim().length === 0) return;

          const value = event.currentTarget.value;

          if (lista.some((listitem) => listitem.title === value)) return;

          Tarefaservice.create({
            title: value,
            estacompleta: false,
          }).then((response) => {
            if (response instanceof ApiErrorexception) {
              alert(response.message);
            } else {
              setlista((oldlista) => {
                //impedir valores repetidos

                return [...oldlista, response];
              });
            }
          });
        }
      },
      [lista]
    );

  const handleTogglecomplete = useCallback((id: string) => {
    const tarefatoupdate = lista.find((item) => item.id == id);
    if (!tarefatoupdate) return;

    Tarefaservice.updateByid(id, {
      ...tarefatoupdate,
      estacompleta: !tarefatoupdate.estacompleta,
    }).then((response) => {
      if (response instanceof ApiErrorexception) {
        alert(response.message);
      } else {
        setlista((oldlista) => {
          return oldlista.map((oldlistitem) => {
            if (oldlistitem.id == id) return response;
            return oldlistitem;
          });
        });
      }
    });
  }, []);

  const handledelete = useCallback((id: string) => {
    Tarefaservice.deleteByid(id).then((response) => {
      if (response instanceof ApiErrorexception) {
        alert(response.message);
      } else {
        setlista((oldlista) => {
          return oldlista.filter((oldlistitem) => oldlistitem.id !== id);
        });
      }
    });
  }, []);

  return (
    <div>
      <p>lista de objetos</p>
      <input onKeyDown={handleInputkeydow}></input>
      <p>{lista.filter((listitem) => listitem.estacompleta).length}</p>
      <ul>
        {lista.map((listitem) => (
          <li key={listitem.id}>
            <input
              onChange={() => handleTogglecomplete(listitem.id)}
              type="checkbox"
              checked={listitem.estacompleta}
            ></input>
            {listitem.title}
            <button onClick={() => handledelete(listitem.id)}>apagar</button>
          </li>
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

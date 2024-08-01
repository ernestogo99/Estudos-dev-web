import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Ilistitem {
  title: string;
  isSelected: boolean;
}

export const Listaobjeto = () => {
  const navigate = useNavigate();
  const [lista, setlista] = useState<Ilistitem[]>([]);
  //toda vez que eu teclar alguma tecla,esse evento será executado
  const handleInputkeydow: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((event) => {
      if (event.key === "Enter") {
        if (event.currentTarget.value.trim().length === 0) return;

        const value = event.currentTarget.value;
        setlista((oldlista) => {
          //impedir valores repetidos
          if (oldlista.some((listitem) => listitem.title === value))
            return oldlista;
          return [
            ...oldlista,
            {
              title: value,
              isSelected: false,
            },
          ];
        });
      }
    }, []);
  return (
    <div>
      <p>lista de objetos</p>
      <input onKeyDown={handleInputkeydow}></input>
      <p>{lista.filter((listitem) => listitem.isSelected).length}</p>
      <ul>
        {lista.map((listitem, index) => (
          <li key={index}>
            <input
              onChange={() => {
                setlista((oldlista) => {
                  return oldlista.map((oldlistitem) => {
                    const newIsselected =
                      oldlistitem.title === listitem.title
                        ? !oldlistitem.isSelected
                        : oldlistitem.isSelected;
                    return {
                      ...oldlistitem,
                      isSelected: newIsselected,
                    };
                  });
                });
              }}
              type="checkbox"
              checked={listitem.isSelected}
            ></input>
            {listitem.title}
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

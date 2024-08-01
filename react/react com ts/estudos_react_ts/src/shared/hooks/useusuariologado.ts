// um react hook customizado é uma função qualquer com um react hook qualquer

import { useContext } from "react";
import { UsuariologadoContext } from "../contexts";

export const useUsuarioLogado = () => {
  const context = useContext(UsuariologadoContext);
  return context;
};

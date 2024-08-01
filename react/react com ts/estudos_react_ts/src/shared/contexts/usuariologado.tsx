import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IusuariologadocontextData {
  nomeDousuario: string;
  logout: () => void;
}

interface childrenprop {
  children: ReactNode;
}

export const UsuariologadoContext = createContext<IusuariologadocontextData>(
  {} as IusuariologadocontextData
);

export const Usuariologadoprovider: React.FC<childrenprop> = ({ children }) => {
  const [nome, setnome] = useState("");

  const handleLogout = useCallback(() => {
    console.log("log out executou");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setnome("ernestogo");
    }, 300);
  }, []);

  return (
    <UsuariologadoContext.Provider
      value={{ nomeDousuario: nome, logout: handleLogout }}
    >
      {children}
    </UsuariologadoContext.Provider>
  );
};

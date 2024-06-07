import CorContexto from "./contexto";
import { useContext } from "react";
const TesteB = () => {
  const { bkgB } = useContext(CorContexto);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgB }}>Função B</h1>
    </div>
  );
};

export default TesteB;

import CorContexto from "./contexto";
import TesteD from "./testeD";
import { useContext } from "react";
const TesteC = () => {
  const { bkgC } = useContext(CorContexto);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgC }}>Função c</h1>
      <TesteD></TesteD>
    </div>
  );
};

export default TesteC;

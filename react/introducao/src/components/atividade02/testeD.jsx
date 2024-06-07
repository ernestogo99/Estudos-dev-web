import CorContexto from "./contexto";
import { useContext } from "react";
const TesteD = () => {
  const { bkgD } = useContext(CorContexto);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgD }}>TesteD</h1>
    </div>
  );
};

export default TesteD;

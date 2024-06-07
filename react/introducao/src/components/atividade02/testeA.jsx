import CorContexto from "./contexto";
import TesteB from "./testeB";
import TesteC from "./testeC";

const TesteA = () => {
  const cores = {
    bkgA: "green",
    bkgB: "white",
    bkgC: "yellow",
    bkgD: "darkblue",
  };
  return (
    <CorContexto.Provider value={cores}>
      <div>
        <h1 style={{ backgroundColor: cores.bkgA }}>Função A</h1>
        <TesteB></TesteB>
        <TesteC></TesteC>
      </div>
    </CorContexto.Provider>
  );
};

export default TesteA;

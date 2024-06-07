import { useEffect, useState } from "react";

const Functionestados = () => {
  const [contador, Setcontador] = useState(0);
  const [ehpar, setehpar] = useState(true);
  useEffect(() => {
    if (contador % 2 == 0) {
      setehpar(true);
    } else {
      setehpar(false);
    }
  }, [contador]);
  let aumentar_contador = () => {
    Setcontador(contador + 1);
  };
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <h1>É par: {`${ehpar}`}</h1>
      <button onClick={aumentar_contador}>Aumentar contador</button>
    </div>
  );
};

export default Functionestados;

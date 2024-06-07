import { useRef, useState } from "react";
let globalx = 0; //totalmente não aconselhado-evitar
const Myrefs = () => {
  let x = 0; // é inicializada quando  o componente é novamente renderizado
  const [statex, setstatex] = useState(0);
  const [flag, setflag] = useState(false);
  const refx = useRef(0); // vc provavelmente nao quer que ela seja renderizada, mas que seu estado seja mantido em novas renderizações
  return (
    <div>
      <h1>X: {x}</h1>
      <h1>StateX: {statex}</h1>
      <h1>Globalx:{globalx}</h1>
      <h1>Refx: {refx.current}</h1>
      <button
        onClick={() => {
          x += 1;
          console.log(`X: ${x}`);
        }}
      >
        X+1
      </button>
      <button
        onClick={() => {
          setstatex((prev) => prev + 1);
          console.log(`Statex: ${statex}`);
        }}
      >
        Statex +1
      </button>
      <button
        onClick={() => {
          globalx += 1;
          console.log(`Globalx ${globalx}`);
          setflag(!flag);
        }}
      >
        Globalx + 1
      </button>
      <button
        onClick={() => {
          refx.current = refx.current + 1;
          console.log(`Refx ${refx.current}`);
        }}
      >
        Refx + 1
      </button>
    </div>
  );
};

export default Myrefs;

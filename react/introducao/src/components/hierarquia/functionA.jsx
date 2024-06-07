import FunctionB from "./functionB";

const FunctionA = () => {
  return (
    <div>
      <h1>Componente A</h1>
      <FunctionB x={10} y={5}></FunctionB>
    </div>
  );
};

export default FunctionA;

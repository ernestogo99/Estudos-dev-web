import { useDispatch } from "react-redux";
import { incrementar } from "./slices/idslice";

const Botaoincrementarredux = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementar())}>ID+1</button>
    </div>
  );
};
export default Botaoincrementarredux;

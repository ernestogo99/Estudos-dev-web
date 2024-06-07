import { useDispatch } from "react-redux";
import { decrementar } from "./slices/idslice";
const Botaodecrementarredux = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrementar())}>ID-1</button>
    </div>
  );
};
export default Botaodecrementarredux;

import Telaprincipalredux from "./telaprincipalredux";
import { store } from "./store";
import { Provider } from "react-redux";
const Meuindex = () => {
  return (
    <div>
      <Provider store={store}>
        <Telaprincipalredux></Telaprincipalredux>
      </Provider>
    </div>
  );
};
export default Meuindex;

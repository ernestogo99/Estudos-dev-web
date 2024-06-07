import Botaoincrementarredux from "./botaoincrementar";
import Botaodecrementarredux from "../botaodecrementar";
import Imagemredux from "./imagemredux";

const Telaprincipalredux = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Imagemredux></Imagemredux>
            </td>
          </tr>
          <tr>
            <td>
              <Botaoincrementarredux></Botaoincrementarredux>
            </td>
            <td>
              <Botaodecrementarredux></Botaodecrementarredux>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Telaprincipalredux;

import { useState } from "react";
import Botaodecrementar from "./botaodecrementar";
import Botaoincrementar from "./botaoincrementar";
import Imagem from "./imagem";

const Telaprincipal = () => {
  const [id, setid] = useState(100);
  const incrementa = () => {
    setid((prev) => {
      return prev + 1;
    });
  };
  const decrementar = () => {
    setid((prev) => {
      return prev - 1;
    });
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Imagem id={id}></Imagem>
            </td>
          </tr>
          <tr>
            <td>
              <Botaoincrementar incrementar={incrementa}></Botaoincrementar>
            </td>
            <td>
              <Botaodecrementar decrementa={decrementar}></Botaodecrementar>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Telaprincipal;

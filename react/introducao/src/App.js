import "./App.css";
import "./index.css";
import Helloworld from "./components/helloworld";
import Olamundo from "./components/teste";
import Calculadora from "./components/calculadora";
import Props from "./components/props";
import Dados from "./components/atividade00/meusdados";
import Dados2 from "./components/atividade00/dados2";
import Temperatura from "./components/atividade00/temperatura";
import FunctionA from "./components/hierarquia/functionA";
import { Header, Body, Footer } from "./components/multiploscomponentes";
import { Supermercado, Fruta, Bebida, Legume } from "./components/06children";
import Pai from "./components/atividade01/questão1/pai";
import * as pc from "./components/atividade01/q2";
import { Hero, Enemy, World, Arena } from "./components/atividade01/batalha";
import FuncaoA from "./components/contextos/funcaoA";
import TesteA from "./components/atividade02/testeA";
import Avo from "./components/atividade02/q2/avo";
import Avoo from "./components/atividade02/q3/avô";
import Savedata from "./components/localstorage/functionlocalstorage";
import Paii from "./components/paifilho/pai";
import Functionestados from "./components/estados/estados";
import Cidades from "./components/atividade03/cidades";
function App() {
  return (
    <div className="App">
      <Functionestados></Functionestados>
    </div>
  );
}

export default App;

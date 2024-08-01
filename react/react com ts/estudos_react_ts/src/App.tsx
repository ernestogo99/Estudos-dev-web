import "./App.css";
import { Dashboard } from "./pages";
import { AppRoutes } from "./routes";
import { Usuariologadoprovider } from "./shared/contexts";

function App() {
  return (
    <div className="App">
      <Usuariologadoprovider>
        <AppRoutes></AppRoutes>
      </Usuariologadoprovider>
    </div>
  );
}

export default App;

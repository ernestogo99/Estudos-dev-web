import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mymenu1 from "./mymenuv1";
import { Container } from "@mui/material";
// paginas do professor
import Cadastrar_prof from "./professor/cadastrar";
import Editar_prof from "./professor/editar";
import Listar_prof from "./professor/listar";
const Mainpage = () => {
  return (
    <div>
      <BrowserRouter>
        <Mymenu1 />
        <Container sx={{ marginTop: 8 }}>
          <Routes>
            <Route
              path="cadastrarprofessor"
              element={<Cadastrar_prof />}
            ></Route>
            <Route path="listarprofessor" element={<Listar_prof />}></Route>
            <Route path="editarprofessor/:id" element={<Editar_prof />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default Mainpage;

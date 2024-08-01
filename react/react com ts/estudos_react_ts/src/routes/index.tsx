import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Lista, Listaobjeto, Login, Loginmemo } from "../pages";
import { Listajson } from "../pages/lista/listajson";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<Navigate to="/pagina-inicial" />}></Route>
        <Route path="/lista" element={<Lista></Lista>}></Route>
        <Route
          path="/lista-objeto"
          element={<Listaobjeto></Listaobjeto>}
        ></Route>
        <Route path="/lista-json" element={<Listajson></Listajson>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login-memo" element={<Loginmemo></Loginmemo>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

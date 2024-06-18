import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/home";
import Empresa from "./components/pages/empresa";
import Contato from "./components/pages/contato";
import Navbar from "./components/componentes/navbar";
import Footer from "./components/componentes/footer";

function App() {
  const meusitens = ["react", "vue", "angular"];
  const [nome, setnome] = useState("");

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

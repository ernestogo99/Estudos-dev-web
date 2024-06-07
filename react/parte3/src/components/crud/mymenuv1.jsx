import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { Link } from "react-router-dom";
const Mymenu1 = () => {
  const [anchorelProf, setanchorelProf] = useState(null);
  const [anchorelAlu, setanchorelAlu] = useState(null);
  const tratar_alu_abrir = (event) => {
    setanchorelAlu(event.currentTarget);
  };
  const tratar_alu_fechar = () => {
    setanchorelAlu(null);
  };
  const tratarOpen_anchorelprof = (event) => {
    setanchorelProf(event.currentTarget);
  };
  const tratarClose_anchorelprof = () => {
    setanchorelProf(null);
  };
  function dropalu_menu() {
    return (
      <Box>
        <Button onClick={tratar_alu_abrir} sx={{ color: "white", my: 2 }}>
          Alunos
        </Button>
        <Menu
          anchorEl={anchorelAlu}
          open={Boolean(anchorelAlu)}
          onClose={tratar_alu_fechar}
        >
          <MenuItem
            onClick={() => {
              tratar_alu_fechar();
              alert("indo para a pagina de cadastrar aluno");
            }}
          >
            Cadastrar
          </MenuItem>
          <MenuItem
            onClick={() => {
              tratar_alu_fechar();
              alert("indo para a pagina de listar aluno");
            }}
          >
            listar
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  function dropprofmenu() {
    return (
      <Box>
        <Button
          sx={{ color: "white", my: 2 }}
          onClick={tratarOpen_anchorelprof}
        >
          Professores
        </Button>
        <Menu
          anchorEl={anchorelProf}
          open={Boolean(anchorelProf)}
          onClose={tratarClose_anchorelprof}
        >
          <MenuItem
            to={"cadastrarprofessor"}
            component={Link}
            onClick={tratarClose_anchorelprof}
          >
            Cadastrar
          </MenuItem>
          <MenuItem
            to={"listarprofessor"}
            component={Link}
            onClick={tratarClose_anchorelprof}
          >
            Listar
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, marginRight: 1 }}
          />
          <Typography
            component="a"
            variant="h5"
            href="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontFamily: "monospace",
              letterSpacing: "0.3rem",
              fontWeight: 800,
            }}
          >
            CRUD_V1
          </Typography>
          <Box
            sx={{
              marginLeft: 3,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {dropprofmenu()}
            {dropalu_menu()}
            <Button sx={{ color: "white", my: 2 }}>Sobre</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Mymenu1;

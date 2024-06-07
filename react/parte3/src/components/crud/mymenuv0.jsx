import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
const Mymenu = () => {
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
            CRUD_V0
          </Typography>
          <Box
            sx={{
              marginLeft: 3,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{ color: "white", my: 2 }}>Professores</Button>
            <Button sx={{ color: "white", my: 2 }}>Alunos</Button>
            <Button sx={{ color: "white", my: 2 }}>Sobre</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Mymenu;

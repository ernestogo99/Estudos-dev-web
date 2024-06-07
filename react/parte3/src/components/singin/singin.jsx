import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Singin = () => {
  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <TextField
            required
            margin="normal"
            fullWidth
            autoFocus
            label="endereço de email"
            id="email"
            name="email"
            type="email"
          />
          <TextField
            required
            margin="normal"
            fullWidth
            autoFocus
            label="Senha"
            id="password"
            name="password"
            type="password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "darkblue", marginTop: 2, marginBottom: 2 }}
          >
            Sign in
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Link underline="none" href="#">
              Esqueceu a senha?
            </Link>
            <Link underline="none" href="#">
              Cadastre-se
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Singin;

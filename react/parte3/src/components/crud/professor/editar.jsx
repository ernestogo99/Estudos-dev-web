import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Editar_prof = () => {
  let { id } = useParams(); // pegar o id
  const navigate = useNavigate();
  const [nome, setnome] = useState("");
  const [curso, setcurso] = useState("");
  const [titulacao, settitulacao] = useState("GRAD");
  const [ai, setAi] = useState({ es: false, al: false, ds: false, mc: false });
  const { es, al, ds, mc } = ai;

  // como [] esta vazio, o useEfect funciona como um construtor, ou seja , roda uma unica vez
  useEffect(() => {
    /*let professor = getprofessorbyid(id);
    setnome(professor.nome);
    setcurso(professor.curso);
    settitulacao(professor.titulacao);
    setAi(professor.ai);*/
    axios
      .get(`http://localhost:3001/professor/retrieve/${id}`)
      .then((response) => {
        setnome(response.data.nome);
        setcurso(response.data.curso);
        settitulacao(response.data.titulacao);
        setAi(response.data.ai);
      })
      .catch((error) => console.log(error));
  }, [id]);

  function handlesubmit(event) {
    const professoratualizado = { nome, curso, titulacao, ai };
    axios
      .put(`http://localhost:3001/professor/update/${id}`, professoratualizado)
      .then((response) => {
        alert(`professor id ${response.data._id} atualizado`);
        navigate("/listarprofessor");
      })
      .catch((error) => console.log(error));
    event.preventDefault(); //previne que a pagina seja recarregada
  }

  function handleCheckbox(event) {
    setAi({ ...ai, [event.target.name]: event.target.checked }); //usamos o [] para transformar em propriedade
  }
  return (
    <div>
      <Typography variant="h5" fontWeight="bold">
        Editar professor {id}
      </Typography>
      <Box component="form" onSubmit={handlesubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          name="nome"
          label="Nome completo"
          value={nome}
          autoFocus
          onChange={(event) => setnome(event.target.value)}
        ></TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="curso"
          name="curso"
          label="Curso"
          value={curso}
          onChange={(event) => setcurso(event.target.value)}
        ></TextField>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-tit-label">Titulação</InputLabel>
          <Select
            labelid="select-tit-label"
            label="Titulação"
            value={titulacao}
            onChange={(event) => settitulacao(event.target.value)}
          >
            <MenuItem value="GRAD">Graduação</MenuItem>
            <MenuItem value="MEST">Mestrado</MenuItem>
            <MenuItem value="DOUT">Doutorado</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          component="fieldset"
          variant="standard"
          sx={{ mt: 2, ml: 2 }}
        >
          <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>
            Áreas de interesse
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox name="es" checked={es} onChange={handleCheckbox} />
              }
              label="Engenharia de software"
            />
            <FormControlLabel
              control={
                <Checkbox name="al" checked={al} onChange={handleCheckbox} />
              }
              label="Algoritmos"
            />
            <FormControlLabel
              control={
                <Checkbox name="ds" checked={ds} onChange={handleCheckbox} />
              }
              label="Desenvolvimento de software"
            />
            <FormControlLabel
              control={
                <Checkbox name="mc" checked={mc} onChange={handleCheckbox} />
              }
              label="Matemática computacional"
            />
          </FormGroup>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ my: 2 }}>
            Atualizar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Editar_prof;

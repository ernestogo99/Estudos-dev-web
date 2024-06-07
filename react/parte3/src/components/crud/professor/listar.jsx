import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Delete as Deleteicon } from "@mui/icons-material";
import { Edit as Editicon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listar_prof = () => {
  // simulando uma base de dados
  /*const professores = [
    { id: 0, nome: "Ernesto", curso: "SI", titulacao: "MEST" },
    { id: 1, nome: "Lucas", curso: "DD", titulacao: "GRAD" },
    { id: 2, nome: "Ana paula", curso: "SI", titulacao: "DOUT" },
    { id: 3, nome: "Ernestogo", curso: "SI", titulacao: "MEST" },
    { id: 4, nome: "Ernestogol", curso: "SI", titulacao: "GRAD" },
  ];
*/
  const navigate = useNavigate();
  const [professores, setprofessores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/professor/listar")
      .then((response) => {
        setprofessores(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleprofessorbyid(id) {
    if (window.confirm("Deseja excluir?")) {
      axios
        .delete(`http://localhost:3001/professor/delete/${id}`)
        .then((response) => {
          const resultado = professores.filter(
            (professor) => professor.id != id
          );
          setprofessores(resultado);
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div>
      <Typography align="center" variant="h5" fontWeight="bold">
        Listar prof
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Curso</StyledTableCell>
              <StyledTableCell>Titulação</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {professores.map((professor) => {
              return (
                <StyledTableRow key={professor.id}>
                  <StyledTableCell>{professor.id}</StyledTableCell>
                  <StyledTableCell>{professor.nome}</StyledTableCell>
                  <StyledTableCell>{professor.curso}</StyledTableCell>
                  <StyledTableCell>{professor.titulacao}</StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <IconButton
                        component={Link}
                        aria-label="edit"
                        color="primary"
                        to={`/editarprofessor/${professor.id}`}
                      >
                        <Editicon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          deleprofessorbyid(professor.id);
                        }}
                        aria-label="delete"
                        color="error"
                      >
                        <Deleteicon />
                      </IconButton>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default Listar_prof;

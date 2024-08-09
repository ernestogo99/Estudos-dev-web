var mongoose = require("mongoose");

//criando o schema

var Professorschema = mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: String, required: true },
  titulacao: { type: String, required: true },
  ai: { type: Object, required: true },
});

//criando um model com base no schema
//coleção professores do mongo
var ProfessormodelMongo = mongoose.model(
  "professores",
  Professorschema,
  "Professores"
);
module.exports = ProfessormodelMongo;

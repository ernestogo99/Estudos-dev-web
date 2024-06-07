const Professormodel = require("../models/professor.models");

let professores = [
  {
    id: 0,
    nome: "Ernesto",
    curso: "SI",
    titulacao: "MEST",
    ai: { es: false, al: false, ds: false, mc: true },
  },
  {
    id: 1,
    nome: "Lucas",
    curso: "DD",
    titulacao: "GRAD",
    ai: { es: false, al: false, ds: true, mc: false },
  },
  {
    id: 2,
    nome: "Ana paula",
    curso: "SI",
    titulacao: "DOUT",
    ai: { es: true, al: false, ds: false, mc: false },
  },
  {
    id: 3,
    nome: "Ernestogo",
    curso: "SI",
    titulacao: "MEST",
    ai: { es: false, al: false, ds: false, mc: true },
  },
  {
    id: 4,
    nome: "Ernestogol",
    curso: "SI",
    titulacao: "GRAD",
    ai: { es: false, al: true, ds: false, mc: false },
  },
];

let id = 5;
class Professorservice {
  static list() {
    return professores;
  }

  static register(data) {
    let professor = new Professormodel(
      id++,
      data.nome,
      data.curso,
      data.titulacao,
      data.ai
    );
    professores.push(professor);
    return professor;
  }

  static update(id, data) {
    for (let professor of professores) {
      if (professor.id == id) {
        professor.nome = data.nome;
        professor.curso = data.curso;
        professor.titulacao = data.titulacao;
        professor.ai = data.ai;
        return professor;
      }
    }
    return null;
  }

  static delete(id) {
    for (let i = 0; i < professores.length; ++i) {
      if (professores[i].id == id) {
        professores.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static retrieve(id) {
    const Id = professores.find((professor) => professor.id == id);
    if (Id) {
      return Id;
    }
    return {};
  }
}

module.exports = Professorservice;

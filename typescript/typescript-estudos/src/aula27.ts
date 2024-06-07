interface curso1 {
  titulo: string;
  des: string;
  aula: number;
  maxAlunos?: number;
  iniciarcurso?(teste: string): void;
}

//herança com interface
interface cursoProg extends curso1 {
  aulas: number;
  maxAlunos?: number;
}

interface cursoArtes extends curso1 {
  aulas: number;
  maxAlunos?: number;
}

let curso2: curso1 = {
  titulo: "Typescript",
  des: "curso de typescript",
  aula: 100,
  maxAlunos: 50,
  iniciarcurso(t: string) {
    console.log("teste");
  },
};

let curso3: cursoArtes = {
  titulo: "c++",
  des: "curso de c++",
  aula: 120,
  aulas: 50,
};

console.log(curso2);
console.log(curso3);

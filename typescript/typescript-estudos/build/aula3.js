"use strict";
class Curso {
    curso = null;
    canal = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let curso1 = new Curso("CFBcursos", "typescript");
console.log(curso1.canal);
console.log(curso1.curso);

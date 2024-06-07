let cursos: string[] = ["javascript", "typescript", "c++"]; //array do tipo string
cursos.push("php");
console.log(cursos);

let valores = [10, 20, 2003];
valores.push(555);
console.log(valores);
//union types

let teste: string | number;
let qualquer_valor: any; //pode receber qualquer tipo
teste = "bruno";
teste = 2024;
console.log(teste);

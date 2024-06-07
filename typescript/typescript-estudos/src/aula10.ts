//null-undefined-unknown

let vnome: string | null;
vnome = null;
console.log(vnome);

//undefined
let teste_nome; //tipo any,mas seu valor é undefined
console.log(teste_nome);

//unknown
let nome3: unknown = 10; //só pode ser atribuido em tipos unknow ou any

console.log(nome3);

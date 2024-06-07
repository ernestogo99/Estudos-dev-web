//tuplas
//eu preciso especificar os tipos de dados para cada posição da tupla
let coisas: [string, number, number] = ["teste", 2, 3];
coisas[2] = 50;
coisas.push("kit medico", 5, 20); //posso seguir a estrutura ou não ao usar o push
// mas eu não conseguirei acessar esses novos itens,pois eu defini que a tupla so teria 3 posições
console.log(coisas);
console.log(coisas[2]);

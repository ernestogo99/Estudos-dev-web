enum dias {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}
//console.log(dias.domingo);
//console.log(dias["domingo"]); //ele entende os valores como chave
//console.log(dias[1]); //mostra o domingo, pois 1 é a chave associada a domingo

const d = new Date();
//console.log(d.getDate());
//console.log(dias[d.getDay()]);
//enum textual

enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "00f",
}
console.log(cores.branco);

//ocorre o preenchimento automatico,user=0,admin=1,super=2 , ou seja,vira uma enum numerica
enum tipousuario {
  USER,
  ADMIN,
  SUPER,
}
console.log(tipousuario.SUPER);

// ocorre uma restrição , só posso receber valores do tipousuario,nesse caso seria 0,1,2
const tp: tipousuario = tipousuario.ADMIN;
console.log(tp);

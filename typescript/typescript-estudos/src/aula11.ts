let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
//type assertion
nvalor = <number>uvalor;
svalor = <string>uvalor;

console.log(typeof uvalor);
console.log(uvalor);

console.log(typeof nvalor);
console.log(nvalor);

//typecast:conversao de tipos
svalor = "20";
nvalor = Number(svalor);
console.log(typeof svalor);
console.log(svalor);
svalor = nvalor.toString();

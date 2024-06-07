"use strict";
teoste();
function teoste() {
    console.log("teste");
}
const arrow = (txt) => {
    console.log(txt);
};
arrow("curso de postgres");
const soma3 = (n1, n2) => {
    return n1 + n2;
};
console.log(soma3(3, 40));
const soma_array = (n) => {
    let s = 0;
    n.forEach((number) => (s += number));
    return s;
};
let numbers = [10, 20, 30, 40];
console.log(soma_array(numbers));

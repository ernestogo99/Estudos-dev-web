"use strict";
let av = [10, "verde", 30, 40];
const obj = {
    cor1: "verde",
    cor2: "amarelo",
    cor3: "azul",
    cor4: "branco",
};
let [aa, bb, cc, dd] = av;
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const fcores = () => {
    return ["verde", "amarelo", "azul", "branco"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "curso de typescript";
let [...t] = texto.split(" ");
console.log(aa);
console.log(cor1);
console.log(nu1);
console.log(co1);
console.log(t);

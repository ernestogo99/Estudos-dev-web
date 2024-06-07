"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "00f";
})(cores || (cores = {}));
console.log(cores.branco);
var tipousuario;
(function (tipousuario) {
    tipousuario[tipousuario["USER"] = 0] = "USER";
    tipousuario[tipousuario["ADMIN"] = 1] = "ADMIN";
    tipousuario[tipousuario["SUPER"] = 2] = "SUPER";
})(tipousuario || (tipousuario = {}));
console.log(tipousuario.SUPER);
const tp = tipousuario.ADMIN;
console.log(tp);

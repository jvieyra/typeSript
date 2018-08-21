var heroe1 = "Flash";
function imprimeHeroe() {
    return heroe1;
}
var activarBatisenal = function () {
    return "Batiseñal activada";
};
console.log(imprimeHeroe());
console.log(activarBatisenal());
/* parametros obligatorios*/
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("John", "kane");
console.log(nombre);
/* paramtros opcionales */
function nombreOpcional(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
/* parametros por defecto */
function nombrePorDefecto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }
    else {
        return nombre;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
/* parametros REST */
function nombreREST(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
/* tipo funcion */
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
var miFuncion;
miFuncion = 10;
miFuncion = sumar;
miFuncion = saludar;
miFuncion = salvarMundo;

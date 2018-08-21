var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Puede volar"],
    getNombre: function () {
        return this.nombre;
    }
};
/*union de tipos*/
var loquesea = "John";
loquesea = 10;
var cosa = 123;
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa es un numero");
}
else {
    console.log("No es un string");
}

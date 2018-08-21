let heroe1:string = "Flash";

function imprimeHeroe():string{
  return heroe1;
}

let activarBatisenal = function():string{
  return "Batiseñal activada";
}

console.log(imprimeHeroe());
console.log(activarBatisenal());

/* parametros obligatorios*/
function nombreCompleto(nombre:string, apellido:string):string{
  return nombre + ' ' + apellido;
}

let nombre = nombreCompleto("John","kane");
console.log(nombre);

/* paramtros opcionales */
function nombreOpcional(nombre:string,apellido?:string):string{
  if(apellido){
    return  nombre + ' '+ apellido;
  }else{
    return nombre;
  }
}

/* parametros por defecto */
function nombrePorDefecto(
          nombre:string,apellido:string,capitalizado:boolean = false):string{

  if(capitalizado){
    return  capitalizar(nombre) + ' '+ capitalizar(apellido);
  }else{
    return nombre;
  }
}

function capitalizar(palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}



/* parametros REST */
function nombreREST(nombre:string, ...losDemasParametros:string[]):string{
  return nombre + " "+ losDemasParametros.join(" ");
}



/* tipo funcion */
function sumar(a:number,b:number):number{
  return a + b;
}

function saludar(nombre:string):string{
  return "I'm "+ nombre;
}

function salvarMundo():void{
  console.log("El mundo esta salvado!");
}

let miFuncion:(a:number, b:number) => number;
miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5,5));
miFuncion = saludar;
console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();

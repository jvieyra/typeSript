//definicion de un tipo de objeto
type Heroe = {
  nombre:string,
  edad:number,
  poderes:string[],
  getNombre:()=>string
}

let flash:Heroe = {
  nombre: "Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};


let superman:Heroe = {
  nombre: "Clark Kent",
  edad:500,
  poderes:["Puede volar"],
  getNombre(){
    return this.nombre;
  }
};

/*union de tipos*/

let loquesea:string | number | Heroe = "John";
loquesea = 10;

let cosa:any = 123;
console.log(typeof cosa);
if(typeof cosa === "number"){
  console.log("Cosa es un numero");
}else{
  console.log("No es un string");
}

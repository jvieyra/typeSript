let esSuperman:boolean = true;
let esBatman:boolean;
let esAquaman:boolean = true;

if(esSuperman){
  console.log('estamos salvados');
}else{
  console.log('Oooops ohh!');
}



esSuperman = convertirClark();

function convertirClark(){
  return false;
}

//numbers
let avengers:number = 5;
let villanos:number;
let otros = 2;


if(avengers > villanos){
  console.log('estamos salvados');
}else{
  console.log('estamos muertos');
}

//string

let batman:string = 'Batman';
let linternaVerde:string = 'Linterna Verde';
let volcanNegro:string = `Volcan Negro`;

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

let concatenar:string = `Los heros son ${ batman },
    ${ linternaVerde }, ${ volcanNegro}`;

console.log(concatenar);

//any

let vengador:any = 123;
let existe;
let derrotas;

vengador = "Dr Strange";
console.log(vengador.charAt(0));

vengador = 150.99230;
console.log(vengador.toFixed(2));

vengador =  true;
console.log(vengador);


//arrays
let arreglo:number[]  = [1,2,2,3,2,3];

let villanos1:string[] = ['a','b','c'];

//tuplas
let heroe:[string,number] = ["Dr strange",100];

//enumeraciones
enum Volumen {
  min = 1,
  medio,
  max = 10
}

let audio:number = Volumen.min;
console.log(audio);


//void

function llamarBatman():void{
  console.log("Mostrar la batiseñal");
}

let mensaje = llamarBatman();

//never nunca puede suceder

function error(mensaje):never{
  throw new Error(mensaje);
}

error("error critico");

//aserciones de tipo
let cualquierValor:any = "Supongo";
let largoDelString:number = (<string>cualquierValor).length;
console.log(largoDelString);


//NULL UNDEFINED

let nada:undefined = undefined;
nada = null;

let ironman:string;
ironman= "tony";
ironman = undefined;

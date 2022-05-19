


/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{
  return  a + b;
}

const sumarFlecha = (a, b) => {
  return a + b;
}

const resultado = sumarFlecha(5, 7);

console.log(resultado);

function multiplicar(numero: number, otroNumero?: number, base:number = 2): number{
  return numero * base;
}

const resMult = multiplicar(5);

console.log(resMult);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
}

 const nuevoPersonaje: PersonajeLOR = {
   nombre: 'Strider',
   pv: 50,
   mostrarHP(){
     console.log('Puntos de vida: ', this.pv);
   }
 }

 curar(nuevoPersonaje, 20);
 nuevoPersonaje.mostrarHP();

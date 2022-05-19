/*
    ===== Código de TypeScript =====
*/

function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T) {
  return class extends constructor {
    newProperty = "newProperty";
    hello = "override";
  };
}

@ClassDecorator
class MiSuperClass {
  public miPropiedad: string = 'ABC123';
  imprimir(){
    console.log('Hola Mundo');
  }
}

console.log(MiSuperClass);

const miClase = new MiSuperClass();

console.log(miClase.miPropiedad);

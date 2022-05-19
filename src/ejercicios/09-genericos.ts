/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString: string = queTipoSoy('Hola Mundo');
let soyNumero: number = queTipoSoy(100);
let soyArreglo: number [] = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let soyExplicito: number = queTipoSoy<number>(100);

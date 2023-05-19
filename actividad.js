/**
 * 1. Dados un array de 10 números, informar cuantos de ellos son positivos. (podemos utilizar de metodo filter() )
 */

// function numero(positivo){
//     let contador = 0
//     for (let i= 0;i < positivo.length;i++){
//         if(positivo[i]>0){
//             contador++
//         }
       
//     }
//     return contador;
// }
// const positivos = [-5,5,-8,-9,3,7,-12,-7,6,-15]
// const npositivo = numero(positivos)
// console.log("El numero de positivos es: "+npositivo)

// //

// const numeroArreglo = [-5,5,-8,-9,3,7,-12,-7,6,-15]
// const numeroPositivo = numeroArreglo.filter(numeroArreglo=>numeroArreglo>0)
// console.log("la cantidad de positivos es: "+numeroPositivo.length)


/**
 * 2. Encontrar la mayor temperaruta de este arreglo: const temperaturas = [25, 30, 28, 32, 29, 27];
 */

// const temperatura = [25, 30, 28, 32, 29, 27]
// console.log("La mayor temperatura es: "+Math.max(...temperatura))

/**
 * 3. Se pide ingresar una cantidad de personas. 
 * Por cada persona ingresar el año de nacimiento e 
 * informar el promedio de edad de aquellos que son millenials.
 */
// const cantidadPersonas = prompt("Ingrese la cantidad de personas:");
// let sumaEdadesMillenials = 0;
// let cantidadMillenials = 0;
// for (let i = 1; i <= cantidadPersonas; i++) {
//   const anioNacimiento = parseInt(prompt(`Ingrese el año de nacimiento de la persona ${i}:`));
//   const edad = new Date().getFullYear() - anioNacimiento;
//   if (anioNacimiento >= 1981 && anioNacimiento <= 1996) {
//     sumaEdadesMillenials += edad;
//     cantidadMillenials++;
//   }
// }
// const promedioEdadMillenials = cantidadMillenials > 0 ? sumaEdadesMillenials / cantidadMillenials : 0;
// //alert(`la cantidad de millenials es: ${cantidadMillenials} y el promedio de edad de los millenials es: ${promedioEdadMillenials}`);
// console.log("El promedio de edad de los millennials es: "+promedioEdadMillenials.toFixed())



/**
 * 4. Algoritmo que lea los nombres y las edades de 2 alumnos, 
 * y que los datos se almacenen en dos arrays. En base a esos datos 
 * cargados, determinar el nombre de la alumna con la mayor edad del array.
 */

// const nombres=[]
// const edades=[]
// let mayorEdad=0

// for(let i=0;i<2;i++){
//     const nombre= prompt("Ingrese su nombre: "+(i+1))
//     const edad= parseInt(prompt("Ingrese su edad: "+(i+1)))
//     nombres.push(nombre)
//     edades.push(edad)
// }
// for(let i=0;i<edades.length;i++){
//     if (edades[i]>edades[mayorEdad]){
//         mayorEdad=i
//     }
// }
// const nombreMayor = nombres[mayorEdad]
// const edadMayor = edades[mayorEdad]
// console.log('El alumno de mayor edad es: ',nombreMayor,' con ',edadMayor,' años')

/**
 * 5. Sumar dos arreglos con longitud diferente
 * arreglo1[4 , 5, 1 ,3 ] y arreglo[1, 2, 6]
 * (En este ejercicio podemos utilizar el método fill(0))
 */


const arreglo1 = [4, 5, 1, 3];
const arreglo2 = [1, 2, 6];

const longitud = Math.max(arreglo1.length, arreglo2.length);

const nuevoArreglo1 = arreglo1.concat(Array(longitud - arreglo1.length).fill(0));  
const nuevoArreglo2 = arreglo2.concat(Array(longitud - arreglo2.length).fill(0));

const resultado = [];
for (let i = 0; i < longitud; i++) {
  resultado.push(nuevoArreglo1[i] + nuevoArreglo2[i]);
}
console.log(resultado); 

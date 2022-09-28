const notas =[1.2, 2.1, 3.4, 7.0, 6.2, 5.4]
let suma=0
let contador=0
while(contador<notas.length){

    const actual=notas[contador]
    suma=suma+actual
    contador=contador+1
}
console.log(suma)
const promedio=suma/notas.length

console.log(promedio)
/*
inicializar variables (sum,indice)
condicion
actualizar variables
*/

while(){

}
 
//for(inicializacion;condicion;actualizacion){

//}

const grades=[1.2, 2.1, 3.4, 7.0, 6.2, 5.4]
for(let contador = o;contador< grades.length; contador++){
    suma += grades[contador]

}
console.log("acumulador:",suma)
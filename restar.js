const notas=[ 10, 10,]
let resta=0
for(let indice=0; indice<notas.length; indice++){
   const actual=notas [indice]
    if(actual>10){
        resta -= actual   
    }
}
console.log("el resultado total es:",resta)

let arrayNew = []
var num = 1330 //Declaramos una variable con para el maximo de multiplos
var element
for (element = 1; element <= num; element++) {//realizamos el ciclo for
 
  if(element%7 === 0 && element%2 !== 0 && element%3 !== 0 && element%5 !== 0 ){ //colocamos una sentencia para que no nos muestre los multiplos de 2,3 y 5
    arrayNew.push(element)
  }
}
console.log(arrayNew);

//Algoritmo condicional y algoritmo con ciclo para calcular costo total de productos seleccionados por el usuario

/*const precio = 185

let cantidadClases = Number(prompt('Escribe el número de clases que deseas adquirir'))

function preciototal(precioFinal){
    alert('Tu total es de: $' + precioFinal + 'MXN')
}
preciototal (precio * cantidadClases)


if (cantidadClases >50){
    alert('Maximo posible de compra: 50 clases por usuario')
}else{
    preciototal()
}

//NECESITO MUCHOS IF PARA ESAS CONDICIONES? 

switch (cantidadClases){
    case 5:
        alert('Tu total es de: $850 MXN')
        break
    case 10:
        alert('Tu total es de: $1,400 MXN')
        break
    case 15:
        alert('Tu total es de: $1,950 MXN')
        break
    case 25:
        alert('Tu total es de: $3,150 MXN')
        break
    case 50:
        alert('Tu total es de: $5,500 MXN')
        break

}*/

//Arrays
const clases5 = { 
    promo: 'Opción 1', 
    precio:'$850 MXN'}
const clases10 = {
    promo: 'Opción 2', 
    precio:'$1,400 MXN'}
const clases15 = {
    promo: 'Opción 3', 
    precio:'$1,950 MXN'}
const clases25 = {
    promo: 'Opción 4', 
    precio:'$3,150 MXN'}
const clases50 = {
    promo: 'Opción 5', 
    precio:'$5,500 MXN'}

const clasesPromo = [clases5,clases10,clases15,clases25,clases50]

console.log(clasesPromo);

for (const clasePromo of clasesPromo){
console.log(clasePromo.promo);
console.log(clasePromo.precio);
}





//Algoritmo condicional y algoritmo con ciclo para calcular costo total de productos seleccionados por el usuario

const precio = 185
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

}







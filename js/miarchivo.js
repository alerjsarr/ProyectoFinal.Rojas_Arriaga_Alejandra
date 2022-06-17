//CARRITO EN PÁGINA: COMPRAR CLASES
/*
class PaquetesdeClases{
    constructor (cantidad, precio, moneda){
        this.cantidad = cantidad
        this.precio = precio
        this.moneda = moneda
    }   
}  

//const precioPorClase = 185
const opcion1= new PaquetesdeClases('5', 850,'MXN')
const opcion2= new PaquetesdeClases('10', 1400, 'MXN')
const opcion3= new PaquetesdeClases('15', 1950, 'MXN')
const opcion4= new PaquetesdeClases('25', 3150, 'MXN')
const opcion5= new PaquetesdeClases('50', 5500, 'MXN')

const precioClaseIndividual = 185

const carritodecompra = []

const mensaje = (opcion) => {
    alert('El total del de ' + opcion.cantidad + ' clases' + 'es de $' +opcion.precio + opcion.moneda );
}

const totalCarritodecompra = () => {
    let sumaTotal = 0
    carritodecompra.forEach((clase) => {
        sumaTotal += clase.precio
    })
    return sumaTotal
}

const agregarClases = () => {
    const paqueteElegido = prompt ('Elige el número de clases que deseas:')
    
    switch (paqueteElegido){
        case '5':
            mensaje(opcion1)
            carritodecompra.push(opcion1)
            break
        case '10':
            mensaje(opcion2)
            carritodecompra.push(opcion2)
            break
        case '15':
            mensaje(opcion3)
            carritodecompra.push(opcion3)
            break
        case '25':
            mensaje(opcion4)
            carritodecompra.push(opcion4)
            break
         case '50':
            mensaje(opcion5)
            carritodecompra.push(opcion5)
            break
        default:
            (() => { alert (`El costo de las clases individuales seleccionadas es de $${ (precioClaseIndividual* paqueteElegido)}`)})()
            carritodecompra.push({ cantidad: paqueteElegido, precio: (precioClaseIndividual* paqueteElegido), moneda:'MXN'})
             break;
        
}

if (paqueteElegido >50){
    alert('Maximo posible de compra: 50 clases por usuario')} 
    
//ME SIGUE ARROJANDO EL COSTO DE MAS DE 50 CLASES, COMO DEJO DE EJECUTAR SI PONEN >50? 


if (confirm('Deseas agregar mas clases?')){
    agregarClases()
} else{
    alert('Finalizar compra. Su total es de $' + totalCarritodecompra());

}
}

agregarClases()
*/


//DOM Y EVENTOS EN PÁGINA: CREAR CUENTA
//FUNCIONES
const enviarForm = (e) => {
    e.preventDefault()
    const nombreApellido = e.target[0].value
    const correoE = e.target[1].value 

//Si quitamos el required de los id 
    if (!nombreApellido || !correoE){
        console.log('Ingresa los datos correspodientes');
        return
    }
    console.log('Datos de Usuario: ')
    console.log(nombreApellido,correoE)
}

const form = document.querySelector('#formulariocrearcuenta')
console.log(form)
form.addEventListener ('submit', enviarForm)

//LOCAL STORAGE 
localStorage.setItem('usuario', 'Nombre y Apelido')
const usuario = localStorage.getItem ('usuario')
console.log(usuario);
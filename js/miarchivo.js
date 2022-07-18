
//DOM Y EVENTOS EN PÁGINA: CREAR CUENTA

// //FUNCIONES
// const enviarForm = (e) => {
//     e.preventDefault()
//     const nombreApellido = e.target[0].value
//     const correoE = e.target[1].value
//     const password= e.target[2].value

//     if (!nombreApellido || !correoE || !password ){
//         const alertfalseCC= ()=>{
//             Swal.fire({
//                 position: 'center',
//                 icon: 'warning',
//                 title: 'Ingresa tus datos y acepta los Terminos y Condiciones para poder crear tu cuenta',
//                 showConfirmButton: true,
//                 timer: 4000
//               })
//         }
        
//         const botonCC= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertfalseCC)
//         return
//     }
//     else{
//         const alertCC= ()=>{
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Espera un momento!',
//                 text: 'Te estamos redirigiendo a tu nueva cuenta',
//                 showConfirmButton: false,
//                 timer: 4000
//               })
//         }
//         const botonCC= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertCC)

//     }



//     //no me agarra este if... 
//     if (!checkbox){
//         const alertCB1= ()=>{
//             Swal.fire({
//                 position: 'center',
//                 icon: 'error',
//                 title: 'Requieres aceptar los Terminos y Condiciones para poder crear una cuenta',
//                 showConfirmButton: true,
//                 timer: 4000
//               })
//         }
//         const checkbox= document.querySelector ('#exampleCheck1')  
       
//     }

// //Esto podría ir en local storage? 

//     console.log('Datos de Usuario: ')
//     console.log(nombreApellido,correoE)
// }

// const form = document.querySelector('#formulariocrearcuenta')
// console.log(form)
// form.addEventListener ('submit', enviarForm)


// //LOCAL STORAGE (CORREGIR!)
// localStorage.setItem('Usuario', 'Correo Electronico')
// const usuario = localStorage.getItem ('usuario')
// console.log(usuario);


//CARDS INDEX 
class PaquetesdeClases{
    constructor (cantidad, objeto, precio, moneda){
        this.cantidad = cantidad
        this.objeto= objeto
        this.precio = precio
        this.moneda = moneda
    }
}
const opcion1= new PaquetesdeClases ('1', 'CLASE', '$185', 'MXN') 
const opcion2= new PaquetesdeClases('5', 'CLASES', '$850','MXN')
const opcion3= new PaquetesdeClases('10', 'CLASES', '$1400', 'MXN')
const opcion4= new PaquetesdeClases('15', 'CLASES', '$1950', 'MXN')
const opcion5= new PaquetesdeClases('25', 'CLASES', '$3150', 'MXN')
const opcion6= new PaquetesdeClases('50', 'CLASES', '$5500', 'MXN')

const paquetes = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6];

let carrito = []

const cardContainer = document.querySelector ('#section5')

paquetes.forEach ((paquete)=> {
        const card = document.createElement('div')
        card.className='card'
        card.innerHTML= `
        <h2>${paquete.cantidad}</h2>
        <h3>${paquete.objeto}</h3>
        <h4>${paquete.precio} ${paquete.moneda}</h4>
        <button data-id="${paquete.cantidad}" class="buttoncards">Comprar Clases</button>
      
        `
    cardContainer.append(card)
})

//carrito
const cartContainer= document.querySelector('#resumendecompraPrecio')

const imprimirCarrito = () => {
    cartContainer.innerHTML= ''
    carrito.forEach((paquetes) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartTotal">
       <h2>${paquetes.precio} ${paquetes.moneda}</h2>
        `
        cartContainer.append(cartRow)
    })
}

const agregarProducto = (e) =>{
    const productoElegido= e.target.getAttribute('data-id')
    const producto = paquetes.find((paquetes) => paquetes.cantidad ==  productoElegido)
    carrito.push(producto)
    imprimirCarrito()
    localStorage.setItem('carrito',JSON.stringify(carrito))
}


const botonesPaquetes= document.querySelectorAll('.buttoncards')
botonesPaquetes.forEach((botonPaquete)=>{
    botonPaquete.addEventListener('click', agregarProducto)
})

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    imprimirCarrito()
}


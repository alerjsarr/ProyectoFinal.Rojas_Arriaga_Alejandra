
// class PaquetesdeClases{
//     constructor (cantidad, precio, moneda){
//         this.cantidad = cantidad
//         this.precio = precio
//         this.moneda = moneda
//     }
// }
// const opcion1 = new PaquetesdeClases ('1', 185, 'MXN') 
// const opcion2= new PaquetesdeClases('5', 850,'MXN')
// const opcion3= new PaquetesdeClases('10', 1400, 'MXN')
// const opcion4= new PaquetesdeClases('15', 1950, 'MXN')
// const opcion5= new PaquetesdeClases('25', 3150, 'MXN')
// const opcion6= new PaquetesdeClases('50', 5500, 'MXN')

// const paquetes = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6]

// const cardContainer = document.querySelector ('#section5')

// paquetes.forEach ((paquete)=> {
//     const card = document.createElement('div')
//     card.className='card'
//     card.innerHTML= `
//     <h2>${paquete.cantidad}</h2>
//     <h3>Clases</h3>
//     <h4>$${paquete.precio} ${paquete.moneda}</h4>
//     <button class="button-o" alt="boton Comprar 5 clases" role="button">Comprar Clases</button>
  
//     `

// cardContainer.append(card)

// })

// const cardNumbers = document.querySelectorAll ('.card')
// console.log(cardNumbers);



// Ejercicio Storage + JSON

// Definimos nuestra clase modelo de producto
class Monitor {
    constructor(marca, pulgadas, imgSrc, precio) {
        this.marca = marca
        this.pulgadas = pulgadas
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

// Generamos nuestros productos
const monitor1 = new Monitor('Samsung', 27, 'https://images.samsung.com/is/image/samsung/latin-led-ls22d300hy-ls22d300hy-zp-026-front-black-52066874', 50000)
const monitor2 = new Monitor('LG', 25, 'https://www.lg.com/ar/images/monitores/md05985257/gallery/medium01.jpg', 45000)
const monitor3 = new Monitor('Aorus', 34, 'https://www.razorman.net/reviewshardware/wp-content/uploads/gigabyte-Aorus-AD27QD.jpg', 60000)

// Creamos un array con todos nuestros productos dentro
const productos = [monitor1, monitor2, monitor3]

// Creamos un array vacio que va a ser nuestro carrito de compras
let carrito = []

// Guardamos la referencia de nuestro div donde se renderizaran nuestros productos
const cardContainer = document.querySelector('#cardContainer')

// Por cada producto generamos una nueva card
productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <h3 class="cardTitle"> Monitor ${producto.marca} </h3>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc"> ${producto.pulgadas} Pulgadas</p>
    <span class="cardPrice"> $${producto.precio} </span>
    <button data-id="${producto.marca}" class="buttonCTA"> Agregar al Carrito </button>
    `
    cardContainer.append(card)
})

// Imprimo el carrito cada vez que se actualiza el array

const cartContainer = document.querySelector('#cartContainer')

const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.imgSrc}">
        </div>
        <div class="cartTitle"><span> Monitor ${producto.marca}</span></div>
        <div class="cartDesc"><span> ${producto.pulgadas} Pulgadas</span></div>
        <div class="cartPrice"><span> $${producto.precio}</span></div>
        `
        cartContainer.append(cartRow)
    })
} 

// Cuando el usuario haga click en un boton, a traves del parametro e nos va a llegar cual es el boton en cuestion. 
const agregarProducto = (e) => {
    // Al acceder a target accedemos al nodo (etiqueta button) y con getAttribute accedemos al atributo donde nosotros guardamos el valor de referencia (conviene siempre que sea un id unico)
    const productoElegido = e.target.getAttribute('data-id')
    // Una vez que tenemos el valor de referencia que guardamos en el boton (en este ejemplo la marca del monitor) hacemos una busqueda (find) en el array original de productos (el mismo que usamos para mostrarlos) y este nos va a devolver todo el objeto que coincida con la busqueda (buscar por el mismo dato que enviamos a data-id)
    const producto = productos.find((producto) => producto.marca == productoElegido)
    // Una vez tenemos todo el objeto, lo enviamos al carrito y ya tenemos nuestro primer producto seleccionado!
    carrito.push(producto)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// Una vez que nuestras cards se renderizaron, accedemos a todos nuestros botones a traves de la clase en comun y le agregamos la escucha del evento click
const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})


// Al cargar la pagina, verifico que exista algo guardado en el carrito y lo imprimo
if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    imprimirCarrito()
}



// Darle Logica al boton de Vaciar Carrito

const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
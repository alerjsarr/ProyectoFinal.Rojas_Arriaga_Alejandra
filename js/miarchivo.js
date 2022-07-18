//DECLARACIONES
//-------------------------
// const opciones = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6];
const allPaquetes=[paquete1,paquete2,paquete3,paquete4,paquete5,paquete6]




//QUERY DE ELEMENTOS
//-------------------------
const PaquetesButtonContainer=document.querySelector('.comprarclasePaquetes')

//FUNCIONES
//-------------------------
const renderizarPaquetes=()=>{
    allPaquetes.forEach((paquete)=>{
        const paquetesButton= document.createElement('button')
        paquetesButton.className='menuTab'
        paquetesButton.setAttribute('data-id', paquete.id)
        paquetesButton.innerHTML=`
                <h2 class="botontitle">${paquete.cantidad} ${paquete.objeto}</h2>
                <h4 class="botonprice">${paquete.precio} ${paquete.moneda}</h4>
                
        `
        PaquetesButtonContainer.append(paquetesButton)
    })
    addListenerBotones()
}

const renderizarDatosPaquetes = (e)=>{
const paqueteIdSelected= e.target.closest('.menuTab').getAttribute('data-id')
const paqueteSelected=allPaquetes.find((paquete)=>paquete.id==paqueteIdSelected)
console.log(paqueteSelected);
}


const addListenerBotones=()=>{
    const PaqueteButton=document.querySelectorAll('.menuTab')
    PaqueteButton.forEach((button)=>{
        button.addEventListener('click', renderizarDatosPaquetes)
    })  
}



//EVENTLISTENERS
//-------------------------


//EJECUCIONES
//-------------------------
renderizarPaquetes()















// const cardContainer = document.querySelector ('#section5')

// opciones.forEach ((opcion)=> {
//         const card = document.createElement('div')
//         card.className='card'
//         card.innerHTML= `
//         <h2>${opcion.cantidad}</h2>
//         <h3>${opcion.objeto}</h3>
//         <h4>${opcion.precio} ${opcion.moneda}</h4>
//         <button onclick="location.href='http://127.0.0.1:5500/html/comprar_clase.html'" data-id="${opcion.cantidad}" class="buttoncards">AQUIERE TUS CLASES!</button>
      
//         `
//     cardContainer.append(card)
// })









//carrito
// const cartContainer= document.querySelector('#resumendecompraPrecio')

// const imprimirCarrito = () => {
//     cartContainer.innerHTML= ''
//     carrito.forEach((paquetes) => {
//         const cartRow = document.createElement('div')
//         cartRow.className = 'cartRow'
//         cartRow.innerHTML = `
//         <div class="cartTotal">
//        <h2>${paquetes.precio} ${paquetes.moneda}</h2>
//         `
//         cartContainer.append(cartRow)
//     })
// }

// const agregarProducto = (e) =>{
//     const productoElegido= e.target.getAttribute('data-id')
//     const producto = paquetes.find((paquetes) => paquetes.cantidad ==  productoElegido)
//     carrito.push(producto)
//     imprimirCarrito()
//     localStorage.setItem('carrito',JSON.stringify(carrito))
// }


// const botonesPaquetes= document.querySelectorAll('.buttoncards')
// botonesPaquetes.forEach((botonPaquete)=>{
//     botonPaquete.addEventListener('click', agregarProducto)
// })

// if (localStorage.getItem('carrito')) {
//     carrito = JSON.parse(localStorage.getItem('carrito'))
//     imprimirCarrito()
// }

//ver si esa redireccion funciona
// const redireccionComprarClases=window.location.href='../comprar_clase.html'
// const botonesIndex=document.querySelectorAll('.buttoncards')
// botonesIndex.forEach((botonIndex)=>{
//     botonIndex.addEventListener('click', redireccionComprarClases)

// })
    
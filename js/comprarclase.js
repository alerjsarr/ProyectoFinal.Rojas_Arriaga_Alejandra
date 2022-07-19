
class Paquetes{
    constructor (id, cantidad, objeto, precio, moneda){
        this.id=id
        this.cantidad = cantidad
        this.objeto= objeto
        this.precio = precio
        this.moneda = moneda
    }
}
const paquete1= new Paquetes('001','1','clase x', '$185', 'MXN') 
const paquete2= new Paquetes('002','5', 'clases x', '$850','MXN')
const paquete3= new Paquetes('003','10','clases x', '$1400', 'MXN')
const paquete4= new Paquetes('004','15','clases x', '$1950', 'MXN')
const paquete5= new Paquetes('005','25','clases x', '$3150', 'MXN')
const paquete6= new Paquetes('006','50','clases x', '$5500', 'MXN')

const allPaquetes=[paquete1,paquete2,paquete3,paquete4,paquete5,paquete6]

const PaquetesButtonContainer=document.querySelector('.comprarclasePaquetes')


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

renderizarPaquetes()



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

    
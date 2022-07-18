
// // PRACTICA DOM (*)

// console.log(document);
// // 1 metodo
// console.log(document.getElementById('clase5').innerHTML);
// // 2 metodo
// console.log(document.getElementsByClassName('card_3'));
// // 3 metodo
// console.log(document.getElementsByTagName ('h1'));
// const titulos= (document.getElementsByTagName ('h1'))
// console.log(titulos);


// // modificar nodos
// const titulo = (document.getElementById ('title1'))
// console.log(titulo.innerHTML);
// titulo.innerText= 'Se modificó el titulo desde JS con text'
// console.log(titulo);
// const clasedeprueba = (document.getElementById ('clasedeprueba'))
// console.log(clasedeprueba.innerHTML);
// clasedeprueba.innerHTML= '<h1> HOLA CLASE DE PRUEBA </h1>'
// console.log(clasedeprueba.innerHTML);

// //agregar nodos
// //1 elemento en blanco
// const contenedor = document.createElement('div')
// //2 contenido al elemento
// contenedor.innerHTML= '<h2> Contenedor creado </h2>'
// console.log(contenedor);
// //acceder al elemento padre 
// const cardContainer = document.getElementById('section5')
// //hacer a nuestro contenedor parte de los hijos de nuestro elemento padre
// cardContainer.append(contenedor)

// //borrar nodo- pal carrito
// cardContainer.remove

// //accede a dato de input
// //*nota: al parecer les tienes que poner un value a todos los input que tienes en tu html
// const input = document.getElementById ('input')
// console.log(input.value);

// // TEMPLATE STRING 
// const nombre = 'Alejandra'
// const apellido = 'Rojas'
// const saludo = `
// <h1>
// Hola ${nombre} ${apellido}
// </h1>
// `
// console.log(saludo);



 // // PRACTICA EVENTOS(*) 


 class PaquetesdeClases{
    constructor (cantidad, objeto, precio, moneda){
        this.cantidad = cantidad
        this.objeto= objeto
        this.precio = precio
        this.moneda = moneda
    }
}
const opcion1= new PaquetesdeClases ('1', 'CLASE', 185, 'MXN') 
const opcion2= new PaquetesdeClases('5', 'CLASES', 850,'MXN')
const opcion3= new PaquetesdeClases('10', 'CLASES', 1400, 'MXN')
const opcion4= new PaquetesdeClases('15', 'CLASES', 1950, 'MXN')
const opcion5= new PaquetesdeClases('25', 'CLASES', 3150, 'MXN')
const opcion6= new PaquetesdeClases('50', 'CLASES', 5500, 'MXN')

const paquetes = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6];

let carrito = []

// const agregarproductos= ()=>{
// paquetes.forEach ((paquete)=> {
//     const card = document.createElement('div')
//     card.className='card'
//     card.innerHTML= `
//     <h2>${paquete.cantidad}</h2>
//     <h3>Clases</h3>
//     <h4>$${paquete.precio} ${paquete.moneda}</h4>
//     <button class="buttoncards" role="button">Comprar Clases</button>
  
//     `

// cardContainer.append(card)

// })
// }


// const cardNumbers = document.querySelectorAll ('.card')
// console.log(cardNumbers);
    

//AddEventListener 

// const boton = document.querySelector('.buttoncards')
// console.log(boton);

// const mostrarMensaje =()=>{
//     console.log('Evento escuchado');
// }

// boton.addEventListener('click' ,mensaje)

// const botonAgregarProductos = document.querySelector('#agregarProductos')
// console.log(botonAgregarProductos);
// botonAgregarProductos.addEventListener('click', agregarproductos)

//FORMULARIO con change, input y submit 

// const inputEmailLogin = document.querySelector('#exampleInputEmail1')
// const mostrarvalue= ()=>{
//     console.log(inputEmailLogin.value)
// }

// inputEmailLogin.addEventListener('change', mostrarvalue)

//submit
// const formularioLogin = document.querySelector('#form1')

// const mostrarvalue= (e)=>{
//     e.preventDefault()
//     console.log(formularioLogin.value)
// }
// formularioLogin.addEventListener('submit', mostrarvalue)

//Event Listener a varios nodos
const cardContainer = document.querySelector ('#section5')

paquetes.forEach ((paquete)=> {
        const card = document.createElement('div')
        card.className='card'
        card.innerHTML= `
        <h2>${paquete.cantidad}</h2>
        <h3>${paquete.objeto}</h3>
        <h4>$${paquete.precio} ${paquete.moneda}</h4>
        <button data-id="${paquete.cantidad}" class="buttoncards">Comprar Clases</button>
      
        `
    cardContainer.append(card)
})

const agregarProducto = (e) =>{
    const productoElegido= e.target.getAttribute('data-id')
    const producto = paquetes.find((paquetes) => paquetes.cantidad ==  productoElegido)
    carrito.push(producto)
    console.log(carrito)
}



const botonesPaquetes= document.querySelectorAll('.buttoncards')
console.log(botonesPaquetes);

botonesPaquetes.forEach((botonPaquete)=>{
    botonPaquete.addEventListener('click', agregarProducto)
})

//STORAGE Y JSON (*)

//obtener datos del local storage y hacer algo con ellos
// localStorage.setItem('keyStorage', 'valor')
// localStorage.setItem('isDarkMode', 'true')
// const isDarkMode= localStorage.getItem('isDarkMode')
// console.log(isDarkMode);

//*el ! es un 'not'
// if (!isDarkMode){
//     alert('Dark Mode Activado')
// }

//session storage
// sessionStorage.setItem('sessionKey', 'sessionValue')
// //algo que no existe 
// localStorage.setItem('variableQueNoExiste','cualquier valor')
// const variableQueNoExiste= localStorage.getItem('variableQueNoExiste')
// console.log(variableQueNoExiste);
//  if(variableQueNoExiste){
//      console.log('La variable existe');
//  }
//  else{
//      console.log('La variable no existe');
//  }

//ejemplo de local storage 
// localStorage.setItem('Producto', 'Clases')
// const producto= localStorage.getItem('Producto')
// console.log(producto);

// const producto2=localStorage.getItem('Producto2')
// console.log(producto2);

// //eliminar algun dato del storage. siempre asegurate de que exista (buena  practica). La seteas(si existe), haces el if para verificar que existe, si existe la borra (no aparece), si no existe solo no aparece (false).
// localStorage.setItem('variableQueNoExiste','existe')

// if (localStorage.getItem('variableQueNoExiste')){
//     console.log('Variable existe, la elimino');
//     localStorage.removeItem('variableQueNoExiste')
// }else{
//     console.log('variable no existe, no hago nada');
// }
// //borrar todo el storage
// localStorage.clear()

//JSON
localStorage.setItem('Array',[1,2,3])
// console.log(localStorage.getItem('Array'));

const clases={
    clases:'10',
    precio: 1400
}
// console.log(clases);

// const clasesJSON={
//     "clases":"10",
//     "precio":1400

// }
// console.log(clasesJSON);

// localStorage.setItem('Paquete', clases)
// console.log(localStorage.getItem('Paquete'));
// const clasesHechasString= JSON.stringify(clases)
// console.log(clasesHechasString);
// localStorage.setItem('PaqueteJSON', clasesHechasString)

// //guarda un string, no se pueden utilizar propiedades de un objeto.
// const objetoGuardadoEnLocal= localStorage.getItem('PaqueteJSON');
// console.log(objetoGuardadoEnLocal);
// //en js lo necesitamos en objeto para poder hacer uso de el:

// //PARSE regresa JSON a JS (objeto)
// console.log(JSON.parse(objetoGuardadoEnLocal));
//mas comun:
const objetoGuardadoEnLocal= JSON.parse(localStorage.getItem('PaqueteJSON'));
console.log(objetoGuardadoEnLocal.precio);















// //PRACTICA AJAX Y FETCH*


//puede ser ruta absoluta con URL o relativa con archivo interno

//FETCH
// let dataDeApi 

// fetch('https://swapi.dev/api/people/4/')
//     .then((response)=> response.json())
//     .then((data) => {
//         dataDeApi= data
//         localStorage.setItem('data', data)
//         console.log(dataDeApi)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//1.sale que la promesa está en 'pending' porque el log es sincronico. 
//2.le ponemos un then para que una vcez que el fetch traiga la info, darle la orden de que hacer con ella, en este caso un log con la peticion. 
//3. no se ve la info, si no un objeto tipo response.
//4. para que te de la info que deseas necsitas en metodo .json() en la respuesta, sale de nuevo en pending porque json es OTRA promesa.
//*nota: hasta el response con json le estas diciendo solamnete que te traiga la misma respuesta pero en formato json
//en ese caso, concatenamos otro then para la promesa de response.json que nos arroje la data.
//ahora si aparece el objeto que contiene esa url:)
//*nota:si pones el console log de data fuera del then te marcará error porque el termnino data solo existe dentro del then
//LO MEJOR ES: poner toda esa peticion en una variable. Por si necesitas utilizarla solo llamas a la peticion. Esta peticion se realizara despues del fetch y no a lo wey.
//Si no tienes tantos productos (tu caso) puedes hacerlo desde un local storage.(NO TAN COMUN THO)
//Un catch avisa cualquier error, bueno ponerlo 

//POST
//es un fetch con method, headers y body. Nos regresa un id! 
//podrias poner tus opciones de clases, remplaza mi page de data?

// fetch ('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'PAQUETES DE CLASES',
//         body: 'post de pueba',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type':'application/json;charset=UTF-8',
//     },
// })
// .then ((response)=> response.json())
// .then ((data)=> console.log(data))

//RUTAS RELATIVAS FETCH GET RELATIVO
//fetch a un archivo interno con .json
//*nota: no se puede comentar en json ggg
//en tu archivo de json se simula un array o un objeto o un array de objetos... RECUERDA CON 2BLE COMILLA

// fetch('../paquetes.json')

// .then ((response) => response.json())
// .then ((data)=> console.log(data))


//ASYNC-AWAIT

// const pedidoApi= async ()=>{
// const response= await fetch ('../paquetes.json')
// const data = await response.json()
// console.log(data);
// }
// pedidoApi()
//pasa a ser sincronico 

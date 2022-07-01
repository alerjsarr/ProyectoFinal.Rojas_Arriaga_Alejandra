
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

 // //PRACTCA EVENTOS*







// //PRACTICA AJAX Y FETCH*
//puede ser ruta absoluta con URL o relativa con archivo interno

//FETCH
let dataDeApi 

fetch('https://swapi.dev/api/people/4/')
    .then((response)=> response.json())
    .then((data) => {
        dataDeApi= data
        localStorage.setItem('data', data)
        console.log(dataDeApi)
    })
    .catch((error)=>{
        console.log(error);
    })
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

fetch ('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        title: 'PAQUETES DE CLASES',
        body: 'post de pueba',
        userId: 1,
    }),
    headers: {
        'Content-type':'application/json;charset=UTF-8',
    },
})
.then ((response)=> response.json())
.then ((data)=> console.log(data))

//RUTAS RELATIVAS FETCH GET RELATIVO
//fetch a un archivo interno con .json
//*nota: no se puede comentar en json ggg
//en tu archivo de json se simula un array o un objeto o un array de objetos... RECUERDA CON 2BLE COMILLA

// fetch('../paquetes.json')

// .then ((response) => response.json())
// .then ((data)=> console.log(data))


//ASYNC-AWAIT

const pedidoApi= async ()=>{
const response= await fetch ('../paquetes.json')
const data = await response.json()
console.log(data);
}
pedidoApi()
//pasa a ser sincronico 





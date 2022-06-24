
// PRACTICA DOM (*)

console.log(document);
// 1 metodo
console.log(document.getElementById('clase5').innerHTML);
// 2 metodo
console.log(document.getElementsByClassName('card_3'));
// 3 metodo
console.log(document.getElementsByTagName ('h1'));
const titulos= (document.getElementsByTagName ('h1'))
console.log(titulos);


// modificar nodos
const titulo = (document.getElementById ('title1'))
console.log(titulo.innerHTML);
titulo.innerText= 'Se modificó el titulo desde JS con text'
console.log(titulo);
const clasedeprueba = (document.getElementById ('clasedeprueba'))
console.log(clasedeprueba.innerHTML);
clasedeprueba.innerHTML= '<h1> HOLA CLASE DE PRUEBA </h1>'
console.log(clasedeprueba.innerHTML);

//agregar nodos
//1 elemento en blanco
const contenedor = document.createElement('div')
//2 contenido al elemento
contenedor.innerHTML= '<h2> Contenedor creado </h2>'
console.log(contenedor);
//acceder al elemento padre 
const cardContainer = document.getElementById('section5')
//hacer a nuestro contenedor parte de los hijos de nuestro elemento padre
cardContainer.append(contenedor)

//borrar nodo- pal carrito
cardContainer.remove

//accede a dato de input
//*nota: al parecer les tienes que poner un value a todos los input que tienes en tu html
const input = document.getElementById ('input')
console.log(input.value);

// TEMPLATE STRING 
const nombre = 'Alejandra'
const apellido = 'Rojas'
const saludo = `
<h1>
Hola ${nombre} ${apellido}
</h1>
`
console.log(saludo);





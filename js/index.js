//Class de cards del index
class OpcionesdeClases{
    constructor (cantidad, objeto, precio, moneda){
        this.cantidad = cantidad
        this.objeto= objeto
        this.precio = precio
        this.moneda = moneda
    }
}
const opcion1= new OpcionesdeClases('1', 'CLASE', '$185', 'MXN') 
const opcion2= new OpcionesdeClases('5', 'CLASES', '$850','MXN')
const opcion3= new OpcionesdeClases('10', 'CLASES', '$1400', 'MXN')
const opcion4= new OpcionesdeClases('15', 'CLASES', '$1950', 'MXN')
const opcion5= new OpcionesdeClases('25', 'CLASES', '$3150', 'MXN')
const opcion6= new OpcionesdeClases('50', 'CLASES', '$5500', 'MXN')

const cardContainer = document.querySelector ('#section5')
const opciones = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6];

opciones.forEach ((opcion)=> {
        const card = document.createElement('div')
        card.className='card'
        card.innerHTML= `
        <h2>${opcion.cantidad}</h2>
        <h3>${opcion.objeto}</h3>
        <h4>${opcion.precio} ${opcion.moneda}</h4>
        <button onclick="location.href='http://127.0.0.1:5500/html/comprar_clase.html'" data-id="${opcion.cantidad}" class="buttoncards">AQUIERE TUS CLASES!</button>
      
        `
    cardContainer.append(card)
})

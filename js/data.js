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

//CLASS de botones de comprar clases

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
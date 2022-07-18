
// //DOM Y EVENTOS EN PÁGINA: CREAR CUENTA

const enviarForm = (e) => {
    e.preventDefault()
    const nombreApellido = e.target[0].value
    const correoE = e.target[1].value
    const password= e.target[2].value

    if (!nombreApellido || !correoE || !password ){
        const alertfalseCC= ()=>{
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Ingresa tus datos y acepta los Terminos y Condiciones para poder crear tu cuenta',
                showConfirmButton: true,
                timer: 4000
              })
        }
        
        const botonCC= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertfalseCC)
        return
    }
    else{
        const alertCC= ()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Espera un momento!',
                text: 'Te estamos redirigiendo a tu nueva cuenta',
                showConfirmButton: false,
                timer: 4000
              })
        }
        const botonCC= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertCC)

    }



    //no me agarra este if... 
    if (!checkbox){
        const alertCB1= ()=>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Requieres aceptar los Terminos y Condiciones para poder crear una cuenta',
                showConfirmButton: true,
                timer: 4000
              })
        }
        const checkbox= document.querySelector ('#exampleCheck1')  
       
    }

//Esto podría ir en local storage? 

    console.log('Datos de Usuario: ')
    console.log(nombreApellido,correoE)
}

const form = document.querySelector('#formulariocrearcuenta')
console.log(form)
form.addEventListener ('submit', enviarForm)


//LOCAL STORAGE (CORREGIR!)
localStorage.setItem('Usuario', 'Correo Electronico')
const usuario = localStorage.getItem ('usuario')
console.log(usuario);
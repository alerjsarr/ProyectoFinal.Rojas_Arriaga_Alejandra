
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
        
        const botonCCF= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertfalseCC)
        return
    }else{
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
        const botonCCT= document.querySelector ('#buttonCrearCuenta').addEventListener ('click',alertCC)
    }

    const checkbox=document.querySelector('#exampleCheck1').checked
    if (!checkbox){
        console.log(checkbox);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Requieres aceptar los Terminos y Condiciones para poder crear una cuenta',
                showConfirmButton: true,
                timer: 4000
              })
        }
       
    console.log('Datos de Usuario: ')
    console.log(nombreApellido,correoE)
    let datosUsuario={
        nombreApellido:nombreApellido,
        correoE:correoE,
    }
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))

    if(checkbox){
        setTimeout(()=>{
            window.location.href='http://127.0.0.1:5500/html/reserva_clase.html';
        },600);

    }
    
    }

const form = document.querySelector('#formulariocrearcuenta')
console.log(form)
form.addEventListener ('submit', enviarForm)




const enviarForm2 = (e) => {
    e.preventDefault()
    const correoELogin = e.target[0].value
    const password = e.target[1].value

    if (!correoELogin || !password){
        const alertfalseCC= ()=>{
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Completa los campos para poder ingresar a tu cuenta',
                showConfirmButton: true,
                timer: 4000
              })
        }
        
        const botonCCF= document.querySelector ('#buttonLogin').addEventListener ('click',alertfalseCC)
        return
    }else{
        const alertCC= ()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'WELCOME BACK!',
                text: 'Te estamos redirigiendo a tu perfil',
                showConfirmButton: false,
                timer: 4000
              })
        }
        const botonCCT= document.querySelector ('#buttonLogin').addEventListener ('click',alertCC)
    }


    console.log('Datos de Usuario: ')
    console.log(correoELogin,password)
    let datosUsuario={
        correoELogin:correoELogin,
        password:password,
    }
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))

    if(alertCC){
        setTimeout(()=>{
            window.location.href='http://127.0.0.1:5500/html/reserva_clase.html';
        },600);

    }
    
    }

const form2 = document.querySelector('#formulariologin')
console.log(form2)
form2.addEventListener ('submit', enviarForm2)


var nombre=document.getElementById("Nombre"); 
var apellido=document.getElementById('Apellido');
var fechadenacimiento=document.getElementById('Fecha');
var correo=document.getElementById('Correo');
var password=document.getElementById('Contraseña');
var error= document.getElementById('error'); /*se crea una variable llamada error para validar el formulario */
function enviarFormulario(){ 
    
    if (nombre.value === null || nombre.value=== ''){ /* Se realiza la respectiva validacion de los datos del formulario */
        alert("Nombre no ingresado"); 
    }

    if (apellido.value === null || apellido.value=== ''){
        alert("Apellido no ingresado");
    }

    if (fechadenacimiento.value === null || fechadenacimiento.value=== ''){
        alert("Fecha no ingresado");
    }

    if (correo.value === null || correo.value=== ''){
        alert("Correo incorrecto");
    }
    
    if (password.value === null || password.value=== ''){
        alert("Contraseña no ingresado");
    }
    return false;
}
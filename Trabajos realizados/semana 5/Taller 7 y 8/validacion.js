function validacion(){
    valor1=document.getElementById("cedu").value;
    valor2=document.getElementById("nomb").value;
    valor3=document.getElementById("apelli").value;
    valor4=document.getElementById("check").checked;
    valor5=document.getElementById("checkb").checked;
    valor6=document.getElementById("ciud").value;
    valor7=document.getElementById("direc").value;
    valor8=document.getElementById("telef").value;
    valor9=document.getElementById("corr").value;

    if( valor1 == null || valor1.length == 0){
        alert ("El campo número de cédula no puede estar vacío");
        return false;
    }

    if (isNaN(valor1)){
        alert ("El campo número de cédula debe ser numérico");
        return false;
    }

    if( valor2 == null || valor2.length == 0){
        alert ("El campo apellido no puede estar vacío");
        return false;
    }

    if( valor3 == null || valor3.length == 0){
        alert ("El campo nombre no puede estar vacío");
        return false;
    }


    if( valor6 == null || valor6.length == 0){
        alert ("El campo ciudad no puede estar vacío");
        return false;
    }

    if( valor7 == null || valor7.length == 0){
        alert ("El campo dirección no puede estar vacío");
        return false;
    }

    if( valor8 == null || valor8.length == 0){
        alert ("El campo teléfono no puede estar vacío");
        return false;
    }

    if (!(/^\d{10}$/.test(valor8))){
        alert ("El campo teléfono debe ser numérico");
        return false;
    }

    if( valor9 == null || valor9.length == 0){
        alert ("El campo email no puede estar vacío");
        return false;
    }

    if (!(/\w+([-+.']\w+)*/.test(valor9)))
    {
        alert ("El email es incorrecto")
        return false;
    }

    alert("Formulario enviado");
    return true;
    
}
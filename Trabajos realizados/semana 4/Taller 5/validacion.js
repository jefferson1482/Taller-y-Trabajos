function octal(){
    var octal =  document.getElementById("id_num").value;
    var decimal = 0;
    var decimal = parseInt(octal,"8")
    var numero;
    var potencia = 1;
    var es_octal = parseInt(octal,8);
    
    if(isNaN(es_octal)){
        alert("El dato ingresado no es un valor octal");

    }else{
        while(octal>0){
            numero = octal % 10;
            decimal = decimal + (numero * potencia);
            octal = octal/ 10;
            octal = Math.trunc(octal);
            potencia=potencia*8;
        }
        var Escritura = window.open("","","width=300 height=200");
        Escritura.document.write(`<h1> Resultado <h1/>${decimal}`);
    }
}

function calcular(){
    var nuno =  document.getElementById("id_uno").value;
    var ndos =  document.getElementById("id_dos").value;
    var n1 = parseInt(nuno);
    var n2 = parseInt(ndos);
    var s = (n1 + n2);
    var r = (n1 - n2);            
    var m = (n1 * n2);
    var d = (n1 / n2);
    
    alert(
        "Suma = " + s +
         " -- Resta = " + r + 
         " -- Multiplicar = " + m + 
         " -- Divide = " + d
    );
}
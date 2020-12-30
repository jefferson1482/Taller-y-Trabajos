function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
 
    var area = (base * altura) / 2;
 
    areaResultado.innerHTML = "" + area;

}
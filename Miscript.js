

var getData = function () {
    let intentos  = 1;



let adivinanza = document.getElementById("adivinanza").value;

while (intentos<=4) {

if (adivinanza=="anana") {
   document.write("capo")
    
} else {
    
      for(intentos; intentos<=4; intentos++) {

        document.getElementById("intentos").innerHTML =  intentos+1  ;
        
      }
    
    
    
    
    
    
    
    

}
}
}


function Ventana(URL){
window.open(URL,"ventana1", "width=120,height=300,scrollbars=NO");
}

/*ss
function adivinanza (adivinanza1) {
    if (intento==adivinanza1) {
        document.write("Respuesta correcta")
    } else {
        document.write ("Respuesta incorrecta")
        intentos+=1;
        if (intentos==4) {
            document.write("Se acabaron los intentos")
        }
        
    }
*/





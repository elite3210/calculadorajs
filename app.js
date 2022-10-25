var cifra = ""
var acumulador=0;
var p_operacion=false
var suma = false
var resta = false
display = document.getElementById('display').value=0;

function display_numeros(numero){
    
    display = document.getElementById('display');
    display.value=cifra+numero;
    cifra = display.value;  
}


function sumar(){
    if(resta){
        acumulador-=parseInt(cifra);
        document.getElementById('display').value=acumulador;   
    }
    else{
        acumulador+=parseInt(cifra);
        document.getElementById('display').value=acumulador;
    }      
    cifra= "" 
    suma=true
    resta = false
    p_operacion=true
}

function restar(){
    if(p_operacion){
        if(suma){
            acumulador+=parseInt(cifra);
            document.getElementById('display').value=acumulador;   
        }
        else{
            acumulador-=parseInt(cifra);
            document.getElementById('display').value=acumulador;  
        } 
    }
    else{
        document.getElementById('display').value=cifra;
        acumulador=parseInt(cifra)
        p_operacion=true
    }
   
    cifra= "" 
    resta=true  
    suma = false
}
function resultado(){

    if(resta==true){
        acumulador = acumulador-parseInt(cifra)      
    }

    if(suma==true){
        acumulador = acumulador+parseInt(cifra)
    }

    document.getElementById('display').value=acumulador
    cifra=0
}

function reset(){
    document.getElementById('display').value=KeyboardEvent(f5)
    cifra =""
    acumulador =0
    
}
var cifra = ""
var acumulador=0;
var p_operacion=false;

var suma        = false
var resta       = false
var multiplica  = false
var igual       = false

display = document.getElementById('display').value=0;

function display_numeros(numero){   
    display         = document.getElementById('display');
    display.value   = cifra+numero;
    cifra           = display.value;  
}

function sumar(){
    if(resta){
        acumulador-=parseInt(cifra);
        document.getElementById('display').value=acumulador;   //si esta esta activado, termina de realizar la operacion anterior y lo presenta en pantalla
        console.log('estoy dentro fs else if resta') 
    }
    else if(multiplica){
        acumulador*=parseInt(cifra);
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro fs else if multi') 
    }
    else{
        acumulador+=parseInt(cifra);
        document.getElementById('display').value=acumulador;
    }      
    cifra= "" 
    suma        = true;
    resta       = false;
    multiplica  = false;
    console.log('suma:'+suma)
}

function restar(){
    if(suma){
        acumulador+=parseInt(cifra);
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro fr de if suma')   
    }
    else if(multiplica){
        acumulador*=parseInt(cifra);
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro frde if multi')   
    }
    else if(resta){
        acumulador-=parseInt(cifra);
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro fr de if resta')  
    } 
    else if(igual){
        document.getElementById('display').value=acumulador;
        igual = false
        console.log('estoy dentro de fr if igual')
    }
    else{
        document.getElementById('display').value=cifra;
        acumulador=parseInt(cifra)
        
        console.log('estoy fr dentro de else')
    }
   
    cifra= "" 
    resta=true  
    suma = false
    multiplica=false
    console.log('esto fr resta:'+resta)
}

function multiplicar(){
    
    if(multiplica){
        acumulador *=parseInt(cifra)
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro fm de if1')
    }
    else if(igual){
        document.getElementById('display').value=acumulador;
        igual = false
        console.log('estoy dentro de fm else if1')
    }
    else if(suma){
        acumulador+=parseInt(cifra)
        document.getElementById('display').value=acumulador
        console.log('estoy dentro de fm else if2')
    }
    else if(resta){
        acumulador-=parseInt(cifra);
        document.getElementById('display').value=acumulador;
        console.log('estoy dentro de fm resta') 
    }
    else{
        document.getElementById('display').value=cifra;
        acumulador=parseInt(cifra)  
        console.log('estoy dentro de fm else')    
    }
    cifra=""
    //p_operacion = true
    resta       = false  
    suma        = false
    multiplica  = true   
}

function resultado(){
    if(resta){
        acumulador = acumulador-parseInt(cifra)      
    }

    if(suma){
        acumulador = acumulador+parseInt(cifra)
    }
    if(multiplica){
        acumulador=acumulador*parseInt(cifra)
    }
    console.log('estoy dentro de fi')  
    document.getElementById('display').value=acumulador
    cifra=0
    //p_operacion = false; 
    multiplica = false
    resta = false
    suma = false
    igual = true                                               //cifra valor a cero para que no sea utilizado en una siguiente operacion suma,resta,multi,etc.
}

function dividir(){
    alert("estas ejecutando la funcion dividir")
}
const textArea = document.querySelector(".text-area");
const respuesta = document.querySelector(".respuesta");

//    La letra "e" es convertida para "enter"
//    La letra "i" es convertida para "imes"
//    La letra "a" es convertida para "ai"
//    La letra "o" es convertida para "ober"
//    La letra "u" es convertida para "ufat"

function btnCodificar(){
    const textocodificado = codificar(textArea.value);
    respuesta.value = textocodificado    
}


function codificar (stringCodificada){
    let matrizCodigo = ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"];
    stringCodificada = stringCodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i = i++) {
        if(stringCodificada.includes(matrizCodigo[i][0])){
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);  
        }
    }
    return

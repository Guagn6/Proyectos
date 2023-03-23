const inputText = document.querySelector(".input__text"); 
const imgOutput = document.querySelector('.img-output')
const outputText = document.querySelector(".output__text");
const messageContainer = document.querySelector(".message-container");
const copyOutput = document.querySelector(".copy-button");

outputText.addEventListener('input', function(){
    if (outputText.value.trim() === ''){
        copyOutput.style.display = 'none';
        messageContainer.style.display = 'block';
    } else{
        outputText.style.height = '77%';
        copyOutput.style.display = 'block';
        messageContainer.style.display = 'none';
        imgOutput.style.display = 'none';
    }
});

outputText.addEventListener('input', function(){
    if (outputText.value.length == 0){
        outputText.style.height = '30%';
        copyOutput.style.display = 'none';
        messageContainer.style.display = 'block';
    } else{
        copyOutput.style.display = 'block';
        messageContainer.style.display = 'none';
        outputText.style.height = '77%';
        imgOutput.style.display = 'none';
    }
});

//Encrypt and button functions 
function encrypt (stringCodificada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCodificada = stringCodificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringCodificada.includes(matrizCodigo[i][0])){
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCodificada;
}

function buttonEncrypt(){
    const encryptedText = encrypt(inputText.value);
    if (outputText.value = encryptedText){
        inputText.value = "";
        imgOutput.style.display = 'none';
        messageContainer.style.display = 'none';
        outputText.style.height = '77%';
        copyOutput.style.display = 'block';
    }
}

//Decrypt and button functions
function decrypt (stringDecodificada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecodificada = stringDecodificada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDecodificada.includes(matrizCodigo[i][1])){
            stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecodificada;
}

function buttonDecrypt(){
    const decryptedText = decrypt(outputText.value);
    if (inputText.value = decryptedText){
        outputText.value = "";
        outputText.style.height = '30%';
        messageContainer.style.display = 'block';
        copyOutput.style.display = 'none';
    }
}

//Copy function
function copyToClipboard() {
    outputText.select();
    document.execCommand("copy");
  
    const mensaje = document.createElement("div");
    mensaje.innerHTML = "Texto copiado";
    mensaje.style.position = "fixed";
    mensaje.style.top = "3vh";
    mensaje.style.right = "10vw";
    mensaje.style.color = "#fff";
    mensaje.style.backgroundColor = "#0A3871";
    mensaje.style.padding = "10px";
    mensaje.style.borderRadius = "10px";
    document.body.appendChild(mensaje);

    setTimeout(() => {
        document.body.removeChild(mensaje);
    }, 2000);
}


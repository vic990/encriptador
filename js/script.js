const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++) {
        if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringParaEncriptar;
}

function btnDescriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringParaDesencriptar) { 
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai","a"], ["ober", "o"], ["ufat","u"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++) {
        if (stringParaDesencriptar.includes(matrizCodigo[i][0])) {
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar;

}
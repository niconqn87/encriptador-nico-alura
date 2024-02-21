//para hacer que solo se puedan ingresar minúsculas
function validarInput() {
    //obtengo la letra desde el input
    let inputTexto = document.getElementById("texto");
    //lo guardo como el texto que es
    let inputValidar = inputTexto.value;
    // si van haciedo los reemplazos
    let inputSinAcentos = inputValidar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let inputMinusculas = inputSinAcentos.toLowerCase();
    let letrasMinusculas = inputMinusculas.replace(/[^a-z\s]/g, '');
  
    inputTexto.value = letrasMinusculas;
  
    if (inputValidar !== letrasMinusculas) {
      alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
    }
  }
//para el boton de encriptar
function encriptador() {
  if(document.getElementById("texto").value == "gaton y gatalina"){
    var ocultar = document.getElementById("logo-texto");
    ocultar.style.display = "none";
    
    var mostrar = document.getElementById("gatitos-secretos");
    mostrar.style.display = "block";
  } else {
    let textoParaEncriptar = document.getElementById("texto").value;
    let caracteresEncriptables = ["e", "i", "a", "o", "u"];
    let encriptacion = ["enter", "imes", "ai", "ober", "ufat"];
    let textoEncriptado = reemplazo(textoParaEncriptar, caracteresEncriptables, encriptacion);
    document.getElementById("texto-encriptado").innerText = textoEncriptado;
//oculta el muñeco y el texto
    var ocultar = document.getElementById("logo-texto");
    ocultar.style.display = "none";
//muestra el boton
    var mostrar = document.getElementById("boton-para-copiar");
    mostrar.style.display = "block";
  }
}
//para el boton de desencriptar

 function desencriptador() {
    let textoParaEncriptar = document.getElementById("texto").value;
    let encriptacion = [ "i", "a","e", "o", "u"];
    let caracteresEncriptables = [ "imes", "ai","enter", "ober", "ufat"];
    
    let textoEncriptado = reemplazo(textoParaEncriptar, caracteresEncriptables, encriptacion);
    document.getElementById("texto-encriptado").innerText = textoEncriptado;

    var ocultar = document.getElementById("logo-texto");
    ocultar.style.display = "none";

    var mostrar = document.getElementById("boton-para-copiar");
    mostrar.style.display = "block";
  }

//para buscar patrones y reemplazarlos por otros en el texto del input
  function reemplazo(texto, arregloDePatrones, arregloDeReemplazos) {
    //para cada elemento y posición
    arregloDePatrones.forEach((patron, indice) => {
    //reeplaza por el otro elemento del otro arreglo de igual posición
      texto = texto.replace(new RegExp(patron, 'g'), arregloDeReemplazos[indice]);
    });
    return texto;
  }
//para el boton de copiar
  function copiarTexto() {
    let textoCopiado = document.getElementById("texto-encriptado");
//lo guarda en el portapapeles
    navigator.clipboard.writeText(textoCopiado.textContent);
}
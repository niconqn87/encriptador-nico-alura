Este es un simple encriptador de texto diseñado para aceptar solo letras minúsculas sin acentos ni caracteres especiales. Además, proporciona funciones para encriptar, desencriptar y copiar el texto encriptado al portapapeles.

Funciones
Validar Input (validarInput)
Esta función garantiza que solo se ingresen letras minúsculas sin acentos ni caracteres especiales en el campo de texto. Se realiza una normalización Unicode (NFD) para descomponer los caracteres acentuados y se eliminan las marcas diacríticas. El resultado se convierte a minúsculas y se mantiene solo las letras y espacios.

Encriptador (encriptador)
Esta función toma el texto ingresado, identifica ciertos caracteres y los reemplaza según un conjunto predefinido. Luego, muestra el texto encriptado y oculta el logo y el texto de introducción, revelando el botón para copiar el texto encriptado.

Desencriptador (desencriptador)
Similar al encriptador, esta función toma el texto ingresado y realiza un reemplazo inverso para desencriptarlo. Luego, muestra el texto desencriptado y realiza la misma manipulación de visualización que en el encriptador.

Reemplazo (reemplazo)
Esta función generalizada toma un texto, un conjunto de patrones y un conjunto de reemplazos, y realiza el reemplazo de los patrones por los reemplazos en el texto.

Copiar Texto (copiarTexto)
Esta función copia el texto encriptado al portapapeles utilizando la API de Clipboard.

Estilos CSS
Se han proporcionado estilos básicos para la presentación de la interfaz de usuario. Se utiliza un diseño responsive para adaptarse a diferentes dispositivos (escritorio, tablet, celular).

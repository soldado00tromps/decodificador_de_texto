
var textInput=document.querySelector("#imput-texto");
var textoutput=document.querySelector("#output-texto");

function criptografar (){
    var texto = textInput.value;

    var resultadoCripto= texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");          
  
      document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultadoCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'  

}
function descriptografarTexto () {
    var texto = textInput.value;

    var resultadodesCripto= texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");          
    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultadodesCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'  
  
}
function copiar() {
     var textocop = document.getElementById('output-texto');

     textocop.select();
     navigator.clipboard.writeText(textocop.value)
     alert('seu texto foi copiado')
}









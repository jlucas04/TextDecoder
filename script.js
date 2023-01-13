var areadetexto = document.querySelector('.texto-area1')

var textoresposta = document.querySelector('.texto-area2')

var botaoCriptografa = document.querySelector('.Criptografar')
var botaoDescriptografa = document.querySelector('.Descriptografar')
var botaoCopia = document.querySelector('.botaodecopiar')
var botaodelimpar = document.querySelector('.botaoRecarregar');

var divimagem = document.querySelector('.segundasecao')
var divdetexto = document.querySelector('.terceirasecao')



function troca1() {
  if (areadetexto.value !== '') {
    divimagem.style.display = 'none'
    divdetexto.style.display = 'block'
  }
}


function criptografar(){
  var teclado = areadetexto.value;
  var resposta = teclado

    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

    textoresposta.innerHTML = resposta;
    troca1();
}


function descriptografar(){

  var teclado = areadetexto.value;
  var resposta = teclado

    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

    textoresposta.innerHTML = resposta;
    troca1();
}


function troca2() {
  areadetexto.value = ''
  divimagem.style.display = 'block'
  divdetexto.style.display = 'none'
}


function copiaTextoCaixa() {
  textoresposta.select()
  document.execCommand('copy')


}



botaoCriptografa.onclick = criptografar;
botaoDescriptografa.onclick = descriptografar;
botaoCopia.onclick = copiaTextoCaixa;
botaodelimpar.onclick = troca2;


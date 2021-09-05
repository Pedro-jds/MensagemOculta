//texto a ser convertido
const texto = document.getElementById('texto')
const textoSaida = document.getElementById('resultado')

//botao de enviar texto para decodificar
const btn = document.getElementById('enviarTexto')


//selecao base ou cifra
const cifraOuBase = document.getElementById('selecao')

//passos cifra de cesar
const divPassos = document.getElementById('divPassos')
const passosCifra = document.getElementById('passos')

//botao radio codificar ou decodificar

const codificarRadio = document.getElementById('codificar')
const decodificarRadio = document.getElementById('decodificar')

//area de digitação 




function base64(texto) {

    let saidaDetexto = ''

    if(codificarRadio.checked) {
        saidaDetexto = window.btoa(texto)
    }
    else if (decodificarRadio.checked){
        saidaDetexto = window.atob(texto)
    }
    return saidaDetexto
}

function crifraDeCesar (texto,numPassos) {
    let arrayTexto = texto.split("")
    let arrayNumber = arrayTexto.map((caracter)=>{return caracter.charCodeAt(0)})
    let verificador = 1
    if(decodificarRadio.checked)
        verificador = -1
    let arrayComparacao = arrayNumber.map((caracter)=>{return caracter+(verificador*numPassos)})
    let saidaDetexto = String.fromCharCode(...arrayComparacao)

    return saidaDetexto   
}

cifraOuBase.addEventListener('change',function(){
    if(cifraOuBase.value==='cifraSelecao'){
        divPassos.style.display='flex'

    }
    else {
        divPassos.style.display='none'
    }
})


btn.addEventListener('click', function(ev){
    ev.preventDefault();
    let escolhaSelecao = cifraOuBase.value
    let textoDeSaida = ''

    if(escolhaSelecao==='baseSelecao'){
        textoDeSaida = base64(texto.value)
    }
    else if(escolhaSelecao==='cifraSelecao'){
        textoDeSaida = crifraDeCesar(texto.value,passosCifra.value)
    }

    textoSaida.textContent = textoDeSaida
})
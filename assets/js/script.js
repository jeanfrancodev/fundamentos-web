/*
  Case Sensitive = Reconhece letras maiúsculas e minúsculas

  por tag: getElementByTagName()
  por Id: getElementById()
  por Nome: getElementByName()
  por Classe: getElementByClassName()
  por Seletor: querySeletor()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
} 

// 1. so um @
// 2. .
// 3. .com
// 4. n pode ter caractere especial

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'email inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'email válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'digite no máximo 100 caractéres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}
function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
   alert('Formulário enviado com sucesso!')
    } else {
      alert('Preencha o formulário corretamente antes de enviar..')
    }
}
function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}
function mapaNormal(){
  mapa.style.width = '400px'
  mapa.style.height = '250px'
}

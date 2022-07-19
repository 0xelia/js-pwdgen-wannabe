// chiedere all' utente il nome
const nome = prompt('Ciao! Come ti chiami?')
console.log (nome)
// chidere all'utente il cognome
const cognome = prompt('Qual è il tuo cognome?')
console.log (cognome)
// chiedere il colore preferito
const colorePref = prompt('Qual è il tuo colore preferito?')
console.log (colorePref)
// recuperare l'elemento dall'html
const PW = document.getElementById ('password')
console.dir (PW)
//Numero random
const random = Math.floor(Math.random() * 100)
// generare la password (concatenazione di variabili)
PW.innerHTML = 'Your Password is: ' + nome + cognome + colorePref + random
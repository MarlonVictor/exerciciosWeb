let num, tentativa, pontos, ligado, addOpc, programa
let gabarito = new Array(30)

let visor = document.querySelector('#visor1')
let visor2 = document.querySelector('#visor2')

const gabarito021 = new Array('B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C');
const gabarito022 = new Array('B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A');
const gabarito023 = new Array('B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C');
const gabarito024 = new Array('B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D');
const gabarito025 = new Array('C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B');

function on() {
    visor.style.color = 'red'
    ligado = true
    addOpc = true // btn
}

function off() {
    visor.style.color = 'rgba(255, 0, 0, 0.26)'
    visor.value = '*'
    visor2.value = ''
    ligado = false
}

// Verifica se o display está ligado e adiciona o valor do btn selecionado
function addNumber(opc) {
    if(ligado == true && addOpc == true) {
        visor.value += opc
    }
}

function enter() {
    addOpc = false // Não permetir acrescentar mais valores 

    if(ligado == true) {
        programa = visor.value.replace('*', '') // Retirar o asterisco do valor

        if(programa == '021')
            gabarito = gabarito021
        else if(programa == '022')
            gabarito = gabarito022
        else if(programa == '023')
            gabarito = gabarito023
        else if(programa == '024')
            gabarito = gabarito024
        else if(programa == '025')
            gabarito = gabarito025
        else {
            alert('Número de pragrama Inválido')
            window.location.href = 'index.html'
        }
    
        pontos = 0
        num = 1
        tentativa = 1
    
        visor.value = `${programa}->${num}:`
        visor2.value = `Tentativa ${tentativa} de 3`
    }
}
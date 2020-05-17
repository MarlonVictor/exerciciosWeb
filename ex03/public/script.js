// Nome
var playerName = document.getElementById('player');
var placeName = document.getElementById('playerName');

function enter() {
    document.getElementById('modal').style.top = '0';

    playerName = document.querySelector('input#player').value;
    placeName.innerHTML = playerName;
}

// Jogo
var playerOpc = 0;
var computerOpc = 0;
var winner = 0;
var result = document.getElementById('result');
var screen1 = document.getElementById('jogo1');
var screen2 = document.getElementById('jogo2');

function start(opcao) {
    playerOpc = opcao;
    computerOpc = Math.round(Math.random()* 2 + 1);

    if(playerOpc == 1 && computerOpc == 1) {
        winner = 0;
        result.innerHTML = '<span>Empate</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/pedra_dark.png">';
        screen2.innerHTML = '<img src="images/pedra_dark.png">';
    } else if(playerOpc == 1 && computerOpc == 2) {
        winner = 2;
        result.innerHTML = 'Você <span>perdeu</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/pedra_dark.png">';
        screen2.innerHTML = '<img src="images/papel_dark.png">';
    } else if(playerOpc == 1 && computerOpc == 3) {
        winner = 1;
        result.innerHTML = 'Você <span>ganhou</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/pedra_dark.png">';
        screen2.innerHTML = '<img src="images/tesoura_dark.png">';
    } else if(playerOpc == 2 && computerOpc == 1) {
        winner = 1;
        result.innerHTML = 'Você <span>ganhou</span><a href="index.html">Voltar</a>';
        screen1.innerHTML ='<img src="images/papel_dark.png">';
        screen2.innerHTML = '<img src="images/pedra_dark.png">';
    } else if(playerOpc == 2 && computerOpc == 2) {
        winner = 0;
        result.innerHTML = '<span>Empate</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/papel_dark.png">';
        screen2.innerHTML = '<img src="images/papel_dark.png">';
    } else if(playerOpc == 2 && computerOpc == 3) {
        winner = 2;
        result.innerHTML = 'Você <span>perdeu</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/papel_dark.png">';
        screen2.innerHTML = '<img src="images/tesoura_dark.png">';
    } else if(playerOpc == 3 && computerOpc == 1) {
        winner = 2;
        result.innerHTML = 'Você <span>perdeu</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/tesoura_dark.png">';
        screen2.innerHTML = '<img src="images/pedra_dark.png">';
    } else if(playerOpc == 3 && computerOpc == 2) {
        winner = 1;
        result.innerHTML = 'Você <span>ganhou</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/tesoura_dark.png">';
        screen2.innerHTML = '<img src="images/papel_dark.png">';
    } else if(playerOpc == 3 && computerOpc == 3) {
        winner = 0;
        result.innerHTML = '<span>Empate</span><a href="index.html">Voltar</a>';
        screen1.innerHTML = '<img src="images/tesoura_dark.png">';
        screen2.innerHTML = '<img src="images/tesoura_dark.png">';
    } 
}
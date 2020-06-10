// Máscaras
function allowedKey() { //Entrar só número no input
    const key = (window.event) ? event.keyCode : event.which
    //Código das teclas numéricas superiores min-48, max-57
    //Código das teclas numéricas laterais min-96, max-105
    //Código do backspace = 8
    //Código das setas = 37 && 39
                
    if(key >= 48 && key <= 57 || key >= 96 && key <= 105 || key == 8 || key >= 37 && key <= 39)
        return true;
    return false;
}

function maskCpf() {
    const cpf = document.querySelector('#cpf');

    if(cpf.value.length == 3 || cpf.value.length == 7) 
        cpf.value += '.';
    else if(cpf.value.length == 11)
        cpf.value += '-';
}

function maskTel() {
    const tel = document.querySelector('#tel');

    if(tel.value.length == 0)
        tel.value += '('
    else if(tel.value.length == 3)
        tel.value += ')'
    else if(tel.value.length == 9)
        tel.value += '-'
}

/**/

// Formulario da pag reserve
function openModal() {
    document.querySelector('#modal').style.display = 'flex';
    return false;
}

function closeModal() {
    document.querySelector('#modal').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', closeModal)

function choseCar() {// Opções do modal
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');
    const c4 = document.getElementById('c4');
    const c5 = document.getElementById('c5');

    const view = document.querySelector('.view');

    if(c1.checked == true){
        view.innerHTML = `
            <div class="confirm">
                <p>Você escolheu um ${c1.value}</p>
                <p>Para confirmar, Digite seu <strong>CPF</strong>:</p>
                <input type="text" placeholder="xxx.xxx.xxx-xx" id="cpf" onkeydown="return allowedKey()" onkeypress="maskCpf()" maxlength="14" autocomplete="off"><br>
                <button onclick="closeModal()">Confirmar</button>
            <div>
        `
    }else if(c2.checked == true){
        view.innerHTML = `
            <div class="confirm">
                <p>Você escolheu um ${c2.value}</p>
                <p>Para confirmar, Digite seu <strong>CPF</strong>:</p>
                <input type="text" placeholder="xxx.xxx.xxx-xx" id="cpf" onkeydown="return allowedKey()" onkeypress="maskCpf()" maxlength="14" autocomplete="off"><br>
                <button onclick="closeModal()">Confirmar</button>
            <div>
        `
    }else if(c3.checked == true){
        view.innerHTML = `
            <div class="confirm">
                <p>Você escolheu um ${c3.value}</p>
                <p>Para confirmar, Digite seu <strong>CPF</strong>:</p>
                <input type="text" placeholder="xxx.xxx.xxx-xx" id="cpf" onkeydown="return allowedKey()" onkeypress="maskCpf()" maxlength="14" autocomplete="off"><br>
                <button onclick="closeModal()">Confirmar</button>
            <div>
        `
    }else if(c4.checked == true){
        view.innerHTML = `
            <div class="confirm">
                <p>Você escolheu um ${c4.value}</p>
                <p>Para confirmar, Digite seu <strong>CPF</strong>:</p>
                <input type="text" placeholder="xxx.xxx.xxx-xx" id="cpf" onkeydown="return allowedKey()" onkeypress="maskCpf()" maxlength="14" autocomplete="off"><br>
                <button onclick="closeModal()">Confirmar</button>
            <div>
        `
    }else if(c5.checked == true){
        view.innerHTML = `
            <div class="confirm">
                <p>Você escolheu um ${c5.value}</p>
                <p>Para confirmar, Digite seu <strong>CPF</strong>:</p>
                <input type="text" placeholder="xxx.xxx.xxx-xx" id="cpf" onkeydown="return allowedKey()" onkeypress="maskCpf()" maxlength="14" autocomplete="off"><br>
                <button onclick="closeModal()">Confirmar</button>
            <div>
        `
    }
}

/**/

// Formulario da pag questions
function send() {
    const txt = document.querySelector('.view');
    const msg = document.querySelector('#ask_me');

    msg.value = '';
    txt.innerHTML = '<div class="enviado">Sua pergunta foi enviada com sucesso!</div>';
    
    return false;
}
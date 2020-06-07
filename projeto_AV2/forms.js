// Formulario da pag questions
function send() {
    const txt = document.querySelector('.view');
    const msg = document.querySelector('#ask_me');

    msg.value = '';
    txt.innerHTML = '<div class="enviado">Sua pergunta foi enviada com sucesso!</div>';
    
    return false;
}
// Slider do header
const time = 4500;
const background = document.querySelector('header');

function slide1() {
    background.style.backgroundImage='url(img/background1.jpg)'
    setTimeout('slide2()',time);
}

function slide2() {
    background.style.backgroundImage='url(img/background2.jpg)'
    setTimeout('slide3()',time);
}

function slide3() {
    background.style.backgroundImage='url(img/background3.jpg)'
    setTimeout('slide1()',time);
}
window.onload = slide1();

/**/

// Animation
const target = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', function() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e) {
        if(windowTop > e.offsetTop) 
            e.classList.add('animate');
        else 
            e.classList.remove('animate');
    })
})

/**/

// Carrossel
const container = document.querySelector('#carrossel .container');
const controls = document.querySelector('.controls');
const boxs = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var itemsTotal = 0;
var jumpSlide = 0;

responsive = [ //item por slide
    {breakPoint:{width:0,item:1}},
    {breakPoint:{width:800,item:2}},
    {breakPoint:{width:1000,item:3}}
];

function load() {
    for(let i=0; i < responsive.length; i++) {
        if(window.innerWidth > responsive[i].breakPoint.width) {
            items = responsive[i].breakPoint.item
        }
    }
    start();
}

function start() {
    widthTotal = 0;
    for(let i = 0; i < boxs.length; i++){
        boxs[i].style.width = (containerWidth / items) - margin + 'px';
        boxs[i].style.margin = (margin / 2) + 'px';
        widthTotal += containerWidth / items;
        itemsTotal++;
    }
    
    container.style.width = widthTotal + 'px'; // Tamanho do container

    // Controle
    const allSlides = Math.ceil(itemsTotal / items);
    const ul = document.createElement('ul');
    for(let i = 1; i <= allSlides; i++){
        const li = document.createElement('li');
            li.id = i;
            li.setAttribute('onclick', 'controlSlides(this)');
            ul.appendChild(li);
            if(i == 1) {
                li.className = 'active';
            }
    }
    controls.appendChild(ul);
}

function controlSlides(element) {
    const ul = controls.children;// Select ul
    const li = ul[0].children;// Select li

    var active;

    for(let i = 0; i < li.length; i++) {
        if(li[i].className == 'active'){
            active = i;// Encontra qual li está ativado
            li[i].className = "";// Remove a classe
        }
    }

        element.className = 'active'// Ativa a classe

        var number = (element.id - 1) - active;
            jumpSlide += containerWidth * number;
        container.style.marginLeft =- jumpSlide + 'px'; 
}

window.onload = load();

/**/

// Counter da promoção
function iniciarContador(m_init) {
    var t_horas = document.querySelector('#timer-hours');
    var t_minutos = document.querySelector('#timer-minutes');
    var t_segundos = document.querySelector('#timer-seconds');

    var h = m_init -1;
    var m = 59;
    var s = 59;

    var contador = setInterval(function(){
        t_horas.innerHTML = (h > 9) ? ('' + h) : ('0' + h);
        t_minutos.innerHTML = (m > 9) ? ('' + m) : ('0' + m);
        t_segundos.innerHTML = (s > 9) ? ('' + s) : ('0' + s);  

        if(s > 0) s -= 1;
        else if(s == 0 && m > 0) { s = 59; m -=1; }
        else { m = m_init; }
    }, 1000);
}
iniciarContador(24)
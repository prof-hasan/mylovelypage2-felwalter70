//abrir e fechar nav
const nav = document.getElementById('nav')

//pagina atual
const pagAtual = window.location.pathname;
const links = document.querySelectorAll('ul a');

//notas piano
const C2 = new Audio('sounds/C2.wav');
const C3 = new Audio('sounds/C3.wav');
const C3s = new Audio('sounds/C3s.wav');
const D3 = new Audio('sounds/D3.wav');
const D3s = new Audio('sounds/D3s.wav');
const E3 = new Audio('sounds/E3.wav');
const F3 = new Audio('sounds/F3.wav');
const F3s = new Audio('sounds/F3s.wav');
const G3 = new Audio('sounds/G3.wav');
const G3s = new Audio('sounds/G3s.wav');
const A3 = new Audio('sounds/A3.wav');
const A3s = new Audio('sounds/A3s.wav');
const B3 = new Audio('sounds/B3.wav');
const C4 = new Audio('sounds/C4.wav');
const C4s = new Audio('sounds/C4s.wav');
const D4 = new Audio('sounds/D4.wav');
const D4s = new Audio('sounds/D4s.wav');
const E4 = new Audio('sounds/E4.wav');
const F4 = new Audio('sounds/F4.wav');
const F4s = new Audio('sounds/F4s.wav');
const G4 = new Audio('sounds/G4.wav');
const G4s = new Audio('sounds/G4s.wav');
const A4 = new Audio('sounds/A4.wav');
const A4s = new Audio('sounds/A4s.wav');
const B4 = new Audio('sounds/B4.wav');
const C5 = new Audio('sounds/C5.wav');



//pega id teclas
const parentContainer = document.getElementById('piano');

//outros
const disco = document.getElementById('disco');
const agulha = document.getElementById('agulha');

const LP = new Audio('sounds/faint.mp3');

function abrirNav() {
    nav.classList.add('display');
}

function fecharNav() {
    nav.classList.remove('display');
}

//funcionamento piano

let nota = '0';

parentContainer.addEventListener('click', function(event) {
    let nota = event.target.id;
    console.log('', nota);
    somNota(nota);
});

function somNota(nota) {
    console.log('coisa');
    switch(nota) {
        case '1':
            C3.currentTime = 0;
            C3.play();
            break;
        
        case '2':
            C3s.currentTime = 0;
            C3s.play();
            break;
        
        case '3':
            D3.currentTime = 0;
            D3.play();
            break;
        
        case '4':
            D3s.currentTime = 0;
            D3s.play();
            break;

        case '5':
            E3.currentTime = 0;
            E3.play();
            break;
        
        case '6':
            F3.currentTime = 0;
            F3.play();
            break;

        case '7':
            F3s.currentTime = 0;
            F3s.play();
            break;
        
        case '8':
            G3.currentTime = 0;
            G3.play();
            break;
        
        case '9':
            G3s.currentTime = 0;
            G3s.play();
            break;
        
        case '10':
            A3.currentTime = 0;
            A3.play();
            break;
        
        case '11':
            A3s.currentTime = 0;
            A3s.play();
            break;

        case '12':
            B3.currentTime = 0;
            B3.play();
            break;
        
        case '13':
            C4.currentTime = 0;
            C4.play();
            break;
        
        case '14':
            C4s.currentTime = 0;
            C4s.play();
            break;
        
        case '15':
            D4.currentTime = 0;
            D4.play();
            break;
        
        case '16':
            D4s.currentTime = 0;
            D4s.play();
            break;

        case '17':
            E4.currentTime = 0;
            E4.play();
            break;
        
        case '18':
            F4.currentTime = 0;
            F4.play();
            break;

        case '19':
            F4s.currentTime = 0;
            F4s.play();
            break;
        
        case '20':
            G4.currentTime = 0;
            G4.play();
            break;
        
           case '21':
            G4s.currentTime = 0;
            G4s.play();
            break;
        
        case '22':
            A4.currentTime = 0;
            A4.play();
            break;
        
        case '23':
            A4s.currentTime = 0;
            A4s.play();
            break;

        case '24':
            B4.currentTime = 0;
            B4.play();
            break;

        //Outras notas

        case '25':
            C2.volume = 1;
            C2.currentTime = 0;
            C2.play();
            break;

        case '26':
            C5.currentTime = 0;
            C5.play();
            break;
        
        case '27':
            C2.currentTime = 0;
            C2.volume = 0.5;
            C2.play();
            break;

        case '28':
            C2.currentTime = 0;
            C2.volume = 1;
            C2.play();
            break;
    }
}

document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            nota = '1';
            console.log('coisa: ', nota);
            somNota(nota);
        }
        if (event.key === 's') {
            nota = '2';
            somNota(nota);
        }
        if (event.key === 'x') {
            nota = '3';
            somNota(nota);
        }
        if (event.key === 'd') {
            nota = '4';
            somNota(nota);
        }
        if (event.key === 'c') {
            nota = '5';
            somNota(nota);
        }
        if (event.key === 'v') {
            nota = '6';
            somNota(nota);
        }
        if (event.key === 'g') {
            nota = '7';
            somNota(nota);
        }
        if (event.key === 'b') {
            nota = '8';
            somNota(nota);
        }
        if (event.key === 'h') {
            nota = '9';
            somNota(nota);
        }
        if (event.key === 'n') {
            nota = '10';
            somNota(nota);
        }
        if (event.key === 'j') {
            nota = '11';
            somNota(nota);
        }
        if (event.key === 'm') {
            nota = '12';
            somNota(nota);
        }
        if (event.key === ',') {
            nota = '13';
            somNota(nota);
        }
        if (event.key === 'l') {
            nota = '14';
            somNota(nota);
        }
        if (event.key === '.') {
            nota = '15';
            somNota(nota);
        }
        if (event.key === 'ç') {
            nota = '16';
            somNota(nota);
        }
        if (event.key === ';') {
            nota = '17';
            somNota(nota);
        }
        if (event.key === ']') {
            nota = '18';
            somNota(nota);
        }
        
    });



//Toca discos

function musica() {
    agulha.classList.add('agulhaAtivo');
    agulha.style.top = '-0.5em';
    agulha.style.right = '4.7em';
    LP.volume = 0.5;
    LP.play();
}

function musicaStop() {
    agulha.classList.remove('agulhaAtivo');
    agulha.style.top = '1.5em';
    agulha.style.right = '2em';
    LP.currentTime = 0;
    LP.pause();
}

//exemplos sons

function exemplosSons(nota) {
    console.log('', nota);
    somNota(nota);
}

//calculadora de acorde

function calcularAcorde() {
    let acorde = document.getElementById("inputNota").value;
    console.log('', acorde);
}

//calculadora Campo harmônico

function calcularCampo() {

}

//UX

links.forEach(link => {
    if(link.getAttribute('href') === path) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('linkAtual');
    }

});

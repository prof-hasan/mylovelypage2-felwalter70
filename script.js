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
        case 'n1':
            C3.currentTime = 0;
            C3.play();
            break;
        
        case 'n2':
            C3s.currentTime = 0;
            C3s.play();
            break;
        
        case 'n3':
            D3.currentTime = 0;
            D3.play();
            break;
        
        case 'n4':
            D3s.currentTime = 0;
            D3s.play();
            break;

        case 'n5':
            E3.currentTime = 0;
            E3.play();
            break;
        
        case 'n6':
            F3.currentTime = 0;
            F3.play();
            break;

        case 'n7':
            F3s.currentTime = 0;
            F3s.play();
            break;
        
        case 'n8':
            G3.currentTime = 0;
            G3.play();
            break;
        
        case 'n9':
            G3s.currentTime = 0;
            G3s.play();
            break;
        
        case 'n10':
            A3.currentTime = 0;
            A3.play();
            break;
        
        case 'n11':
            A3s.currentTime = 0;
            A3s.play();
            break;

        case 'n12':
            B3.currentTime = 0;
            B3.play();
            break;
        
        case 'n13':
            C4.currentTime = 0;
            C4.play();
            break;
        
        case 'n14':
            C4s.currentTime = 0;
            C4s.play();
            break;
        
        case 'n15':
            D4.currentTime = 0;
            D4.play();
            break;
        
        case 'n16':
            D4s.currentTime = 0;
            D4s.play();
            break;

        case 'n17':
            E4.currentTime = 0;
            E4.play();
            break;
        
        case 'n18':
            F4.currentTime = 0;
            F4.play();
            break;

        case 'n19':
            F4s.currentTime = 0;
            F4s.play();
            break;
        
        case 'n20':
            G4.currentTime = 0;
            G4.play();
            break;
        
           case 'n21':
            G4s.currentTime = 0;
            G4s.play();
            break;
        
        case 'n22':
            A4.currentTime = 0;
            A4.play();
            break;
        
        case 'n23':
            A4s.currentTime = 0;
            A4s.play();
            break;

        case 'n24':
            B4.currentTime = 0;
            B4.play();
            break;

        //Outras notas

        case 'n25':
            C2.volume = 1;
            C2.currentTime = 0;
            C2.play();
            break;

        case 'n26':
            C5.currentTime = 0;
            C5.play();
            break;
        
        case 'n27':
            C2.currentTime = 0;
            C2.volume = 0.5;
            C2.play();
            break;

        case 'n28':
            C2.currentTime = 0;
            C2.volume = 1;
            C2.play();
            break;
    }
}

document.addEventListener('keydown', function(event) {
        if (event.key === 'z') {
            nota = 'n1';
            console.log('coisa: ', nota);
            somNota(nota);
        }
        if (event.key === 's') {
            nota = 'n2';
            somNota(nota);
        }
        if (event.key === 'x') {
            nota = 'n3';
            somNota(nota);
        }
        if (event.key === 'd') {
            nota = 'n4';
            somNota(nota);
        }
        if (event.key === 'c') {
            nota = 'n5';
            somNota(nota);
        }
        if (event.key === 'v') {
            nota = 'n6';
            somNota(nota);
        }
        if (event.key === 'g') {
            nota = 'n7';
            somNota(nota);
        }
        if (event.key === 'b') {
            nota = 'n8';
            somNota(nota);
        }
        if (event.key === 'h') {
            nota = 'n9';
            somNota(nota);
        }
        if (event.key === 'n') {
            nota = 'n10';
            somNota(nota);
        }
        if (event.key === 'j') {
            nota = 'n11';
            somNota(nota);
        }
        if (event.key === 'm') {
            nota = 'n12';
            somNota(nota);
        }
        if (event.key === ',') {
            nota = 'n13';
            somNota(nota);
        }
        if (event.key === 'l') {
            nota = 'n14';
            somNota(nota);
        }
        if (event.key === '.') {
            nota = 'n15';
            somNota(nota);
        }
        if (event.key === 'ç') {
            nota = 'n16';
            somNota(nota);
        }
        if (event.key === ';') {
            nota = 'n17';
            somNota(nota);
        }
        if (event.key === ']') {
            nota = 'n18';
            somNota(nota);
        }
        
    });



//Toca discos

function musica() {
    agulha.classList.add('agulhaAtivo');
    agulha.style.top = '-0.5em';
    agulha.style.right = '4.7em';
    LP.volume = 0.1;
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
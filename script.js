//Estrelas
let e1 = document.getElementById('e1');
let e2 = document.getElementById('e2');
let e3 = document.getElementById('e3');
let e4 = document.getElementById('e4');
let e5 = document.getElementById('e5');
//botão de confirmar
let confirmar = document.getElementById('confirm');
//resultado da avaliação
var numero = 0;

function uma() {
    e1.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e2.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e3.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e4.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e5.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    confirmar.style.background = '#2CC6D0';
    numero = 1;
  }

function duas() {
    e1.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e2.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e3.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e4.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e5.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    confirmar.style.background = '#2CC6D0';
    numero = 2;
  }

  function tres() {
    e1.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e2.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e3.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e4.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    e5.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    confirmar.style.background = '#2CC6D0';
    numero = 3;
    }

  function quatro() {
    e1.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e2.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e3.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e4.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e5.style.background = 'url(desafio-imagens/estrela_vazia.svg)';
    confirmar.style.background = '#2CC6D0';
    numero = 4;
    }

  function cinco() {
    e1.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e2.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e3.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e4.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    e5.style.background = 'url(desafio-imagens/estrela_cheia.svg)';
    confirmar.style.background = '#2CC6D0';
    numero = 5;
    }

//impressão do resultado no console
  function print() {
    console.log('A avaliacao feita por este usuario foi de: %d estrelas', numero);
    }
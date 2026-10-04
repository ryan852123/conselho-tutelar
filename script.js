// =========================================================
// CONSELHO TUTELAR - script.js
// Funções: menu mobile, acordeão do FAQ, formulário de contato
// =========================================================

// --- Menu mobile (abre/fecha ao clicar no ícone de hambúrguer) ---
const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('aberto');
  });
}

// --- FAQ: abre e fecha a resposta ao clicar na pergunta ---
const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(function (pergunta) {
  const cabecalho = pergunta.querySelector('.pergunta-cabecalho');

  if (cabecalho) {
    cabecalho.addEventListener('click', function () {
      pergunta.classList.toggle('aberta');
    });
  }
});

// --- Formulário de contato: por enquanto simula o envio ---
// Quando você tiver um serviço de envio (ex: Formspree, FormSubmit),
// troque essa simulação pelo envio real (veja o comentário no final).
const formularioContato = document.querySelector('#formulario-contato');

if (formularioContato) {
  formularioContato.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const mensagem = document.querySelector('#mensagem-envio');
    if (mensagem) {
      mensagem.classList.add('visivel');
      mensagem.textContent = 'Mensagem enviada. Em breve entraremos em contato.';
    }

    formularioContato.reset();
  });
}

// Para envio real sem back-end próprio, uma opção simples é usar o
// FormSubmit (gratuito): troque a tag <form> no HTML para:
// <form id="formulario-contato" action="https://formsubmit.co/SEU-EMAIL@exemplo.com" method="POST">
// e remova o evento "submit" acima, deixando o próprio serviço cuidar do envio.

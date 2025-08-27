    // BOTÃO DE ACESSIBILIDADE
document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')


        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })

    // TAMANHO DA FONTE
    // AUMENTAR FONTE
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-constraste')

    let tamanhoAtualFonte = 1;

     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    // DIMINUIR FONTE
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaConstrate.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })
})

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });
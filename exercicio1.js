// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let changeExpansao = document.getElementsByClassName('botao-expandir-retrair');

for(let botao of changeExpansao)
{
  botao.addEventListener('click', function()
    {
      let paragrafo = botao.parentNode;
      //Se nao esta expandido
      if (paragrafo.classList.contains('expandido'))
      {
        paragrafo.classList.remove('expandido');
        botao.innerHTML = "+";
      }
      else
      {
        paragrafo.classList.add('expandido');
        botao.innerHTML = "-";
      }
    }
  );
}

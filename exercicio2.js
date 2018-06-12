// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let valor = 0;

function navega(direcao)
{
  // valor = valor + direcao;
  // if(valor<0)
  // {
  //   valor = todasAsImagens.length-1;
  // }
  // else if(valor>todasAsImagens.length-1)
  // {
  //   valor = 0;
  // }
  valor = (valor + todasAsImagens.length + direcao)%todasAsImagens.length;
  document.getElementById('slide').src = servidorDasImagens + todasAsImagens[valor];
}

document.getElementById('anterior').addEventListener('click', function()
  {
    navega(-1);
    // if(valor==0)
    // {
    //   valor = 4;
    // }
    // else
    // {
    //   valor--;
    // }
    //
    // document.getElementById('slide').src = servidorDasImagens + todasAsImagens[valor];
    // //document.getElementById('anterior').previousElementSibling.src = servidorDasImagens + todasAsImagens[valor];      //Também Funcional
  }
);


document.getElementById('proximo').addEventListener('click', function()
  {
    navega(1);
    // if(valor==4)
    // {
    //   valor = 0;
    // }
    // else
    // {
    //   valor++;
    // }
    //
    // document.getElementById('slide').src = servidorDasImagens + todasAsImagens[valor];
    // //document.getElementById('anterior').previousElementSibling.src = servidorDasImagens + todasAsImagens[valor];      //Também Funcional
  }
);

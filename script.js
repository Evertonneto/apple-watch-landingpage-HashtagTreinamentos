const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
}
const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
}
const meiaNoite = {
    nome: "Meia-Noite",
    pasta: "imagens-meia-noite"
}
const rosaClaro = {
    nome: "Rosa-Claro",
    pasta: "imagens-rosa-claro"
}
const verdeCipreste = {
    nome: "Verde-Cipreste",
    pasta: "imagens-verde-cipreste"
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,rosaClaro,estelar]
const opcoesTamanho = ['41 mm', '45 mm']
const opcaoSelecionadaMiniatura1 = document.getElementById('0-imagem-miniatura')
const opcaoSelecionadaMiniatura2 = document.getElementById('1-imagem-miniatura')
const opcaoSelecionadaMiniatura3 = document.getElementById('2-imagem-miniatura')

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

const imagemVizualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')

function trocarImagem(){
    const opcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id;
    imagemSelecionada = opcaoSelecionada.charAt(0);
    imagemVizualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;

    
    
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

    if(tamanhoSelecionado == 0)
    {
        imagemVizualizacao.classList.add('caixa-pequena')
        opcaoSelecionadaMiniatura1.classList.add('caixa-pequena')
        opcaoSelecionadaMiniatura2.classList.add('caixa-pequena')
        opcaoSelecionadaMiniatura3.classList.add('caixa-pequena')
    }
    else
    {
        imagemVizualizacao.classList.remove('caixa-pequena')  
        opcaoSelecionadaMiniatura1.classList.remove('caixa-pequena')
        opcaoSelecionadaMiniatura2.classList.remove('caixa-pequena')
        opcaoSelecionadaMiniatura3.classList.remove('caixa-pequena')
    }


}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector("[name='opcao-cor']:checked").id
    corSelecionada = idOpcaoSelecionada.charAt(0)

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

    textoCor = document.getElementById('nome-cor-selecionada')
    textoCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`

    imagemVizualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;

    
    opcaoSelecionadaMiniatura1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`   
    opcaoSelecionadaMiniatura2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`   
    opcaoSelecionadaMiniatura3.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`

}



let nomePrato;
let nomeBebida;
let nomeSobremesa;
let valor1;
let valor2;
let valor3;
let valorTotal;


function liberar(){
    let bot = document.querySelector(".botao")
    let prato = document.querySelector(".menu-prato .selecionado")
    let bebida = document.querySelector(".menu-bebida .selecionado")
    let sobremesa = document.querySelector(".menu-sobremesa .selecionado")

    if(prato != null && bebida != null && sobremesa != null){
        bot.classList.add("botaoVerde");
        let texto = document.querySelector(".texto");
        texto.innerHTML = "Fechar pedido";
        texto.classList.remove("desativado")
        
        
    }
    else{
        bot.classList.remove("botaoVerde");
        let texto = document.querySelector(".texto");
        texto.innerHTML = "Selecione os 3 itens para fechar o pedido"
        texto.classList.add("desativado")
    }


   
}




function selecionar1(item){
    
    let escolhido = document.querySelector(".menu-prato .selecionado");
    if(escolhido != null && escolhido != item){
        let vetor = document.querySelector(".menu-prato .selecionado .ok");
        vetor.classList.add("apagado");
        escolhido.classList.remove("selecionado");
        item.classList.add("selecionado");
        let novoVetor = document.querySelector(".menu-prato .selecionado .ok");
        novoVetor.classList.remove("apagado");
        
    }

    if(escolhido == item){
        let vetor = document.querySelector(".menu-prato .selecionado .ok");
        vetor.classList.add("apagado");
        item.classList.remove("selecionado");
        
    }
    if(escolhido == null){
        item.classList.add("selecionado");
        let vetor = document.querySelector(".menu-prato .selecionado .ok");
        vetor.classList.remove("apagado");
    }

    nomePrato = document.querySelector(".menu-prato .selecionado .nomeItem")
    valor1 = Number(document.querySelector(".menu-prato .selecionado .valor"))
    liberar()

    
}

function selecionar2(item){
    
    let escolhido = document.querySelector(".menu-bebida .selecionado");
    if(escolhido != null && escolhido != item){
        let vetor = document.querySelector(".menu-bebida .selecionado .ok");
        vetor.classList.add("apagado");
        escolhido.classList.remove("selecionado");
        item.classList.add("selecionado");
        let novoVetor = document.querySelector(".menu-bebida .selecionado .ok");
        novoVetor.classList.remove("apagado");
        
    }

    if(escolhido == item){
        let vetor = document.querySelector(".menu-bebida .selecionado .ok");
        vetor.classList.add("apagado");
        item.classList.remove("selecionado");
        
    }
    if(escolhido == null){
        item.classList.add("selecionado");
        let vetor = document.querySelector(".menu-bebida .selecionado .ok");
        vetor.classList.remove("apagado");
    }

    nomeBebida = document.querySelector(".menu-bebida .selecionado .nomeItem")
    valor2 = Number(document.querySelector(".menu-bebida .selecionado span"))
    liberar()

}

function selecionar3(item){
    
    let escolhido = document.querySelector(".menu-sobremesa .selecionado");
    if(escolhido != null && escolhido != item){
        let vetor = document.querySelector(".menu-sobremesa .selecionado .ok");
        vetor.classList.add("apagado");
        escolhido.classList.remove("selecionado");
        item.classList.add("selecionado");
        let novoVetor = document.querySelector(".menu-sobremesa .selecionado .ok");
        novoVetor.classList.remove("apagado");
        
    }

    if(escolhido == item){
        let vetor = document.querySelector(".menu-sobremesa .selecionado .ok");
        vetor.classList.add("apagado");
        item.classList.remove("selecionado");
        
    }
    if(escolhido == null){
        item.classList.add("selecionado");
        let vetor = document.querySelector(".menu-sobremesa .selecionado .ok");
        vetor.classList.remove("apagado");
    }

    nomeSobremesa = document.querySelector(".menu-sobremesa .selecionado .nomeItem")
    valor3 = Number(document.querySelector(".menu-sobremesa .selecionado span"))
    liberar()

}

function finalizar(item){
    const finalizador = document.querySelector(".botaoVerde")
    if(finalizador == item){
        const nome = prompt("Qual é o seu nome?")
        const endereco = prompt("Qual é o seu endereço?")
        valorTotal = valor1+valor2+valor3
        let textoMensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomePrato}\n-Bebida: ${nomeBebida}\n-Sobremesa:  ${nomeSobremesa}\nTotal: R$ ${valorTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5521959084889?text=${encodeURIComponent(textoMensagem)}`);
        
    }
}






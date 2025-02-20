function teste1() {
    let elogio = document.getElementById("elogio"); 
    let texto_elogio = document.createElement("input"); 
    texto_elogio.setAttribute("type", "text"); 
    texto_elogio.setAttribute("name","elogio");
    texto_elogio.setAttribute("placeholder", "Digite seus elogios"); 
    texto_elogio.setAttribute("id","inputElogio");
    elogio.appendChild(texto_elogio); 

    document.getElementById("elogioBtn").disabled = true;
    document.getElementById("reclamacaoBtn").disabled = true;
    document.getElementById("pedidoBtn").disabled = true;
}

function teste2(){
    let reclamacao = document.getElementById("reclamacao");
    let texto_reclamacao = document.createElement("input");
    texto_reclamacao.setAttribute("type", "text");
    texto_reclamacao.setAttribute("name","reclamacao");
    texto_reclamacao.setAttribute("placeholder","Digite sua reclamação");
    texto_reclamacao.setAttribute("id","inputReclamacao");
    reclamacao.appendChild(texto_reclamacao);

    document.getElementById("elogioBtn").disabled = true;
    document.getElementById("reclamacaoBtn").disabled = true;
    document.getElementById("pedidoBtn").disabled = true;
}

function teste3(){
    let pedido = document.getElementById("pedido");
    let texto_pedido = document.createElement("input");
    texto_pedido.setAttribute("type","text");
    texto_pedido.setAttribute("name","pedido");
    texto_pedido.setAttribute("placeholder","Digite seu pedido");
    texto_pedido.setAttribute("id","inputPedido");
    pedido.appendChild(texto_pedido);

    document.getElementById("elogioBtn").disabled = true;
    document.getElementById("reclamacaoBtn").disabled = true;
    document.getElementById("pedidoBtn").disabled = true;
    
}



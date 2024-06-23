let vendas =[];

function lancarVenda() {
    // Obter o valor do input
    const valorVenda = document.getElementById('valorVenda').value;

    // Converter para número
    const valorVendaNum = Number(valorVenda);

    // Verificar se é um número válido
    if (isNaN(valorVendaNum) || valorVendaNum <= 0) {
        document.getElementById('resultadoNegativo').textContent = "Por favor, digite um valor de venda válido.";
    } else {
        vendas.push(valorVendaNum);
        atualizarVendas();
        document.getElementById('resultadoNegativo').textContent = "Venda registrada com sucesso!";
    }
}

function excluirVenda() {
    const indiceExclusao = document.getElementById('indiceExclusao').value;
    const indiceExclusaoNum = Number(indiceExclusao);

    if (isNaN(indiceExclusaoNum) || indiceExclusaoNum < 0 || indiceExclusaoNum >= vendas.length) {
        document.getElementById('resultadoNegativo').textContent = "Por favor, digite um índice válido.";
    } else {
        vendas.splice(indiceExclusaoNum, 1);
        atualizarVendas();
        document.getElementById('resultadoNegativo').textContent = "Venda excluída com sucesso!";
    }
}

function atualizarVendas() {
    const valorTotalVendido = vendas.reduce((total, valor) => total + valor, 0);
    const quantidadeVendas = vendas.length;

    document.getElementById('valorTotalVendido').textContent = "R$ " + valorTotalVendido.toFixed(2);
    document.getElementById('totalVendas').textContent = quantidadeVendas;
}

// Inicializar valores na primeira carga
atualizarVendas();
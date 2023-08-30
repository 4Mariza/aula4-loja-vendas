function calculadora(valorVenda, operacao) {
    let valorDaVenda = valorVenda
    let codigo = operacao

    let valorAtualizado

    if (codigo == 1) {
        desconto = 8 / 100
        valorAtualizado = valorDaVenda - (valorDaVenda * desconto)
    } else if (codigo == 2) {
        desconto = 4 / 100
        valorAtualizado = valorDaVenda - (valorDaVenda * desconto)
    } else if (codigo == 3) {
        valorAtualizado = valorDaVenda / 2
    } else if (codigo == 4) {
        let juros = 8 / 100
        valorAtualizado = valorDaVenda * (1 + juros)
    } else {
        console.log(`Valor de código inválido.`);
    }

    if (valorAtualizado != undefined)
        return valorAtualizado.toFixed(2)
    else
        return false
}

module.exports = {
    calculadora
}
var calculosVendas = require('./modulo/calculosVendas.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor da venda: ', function (valorVenda) {
    let valorDaVenda = valorVenda.replace(',', '.')

    if (isNaN(valorDaVenda) || valorDaVenda == '')
        console.log(`Digite um valor numérico.`);
    else (entradaDados.question('Código do protocolo de venda: \n1 2 3 4\n ', function (protocolo) {
        let codigo = protocolo
        let valorAtualizado

        valorAtualizado = calculosVendas.calculadora(valorDaVenda, codigo)
        
        console.log(`Valor atualizado para o código ${codigo}: `);
        if (valorAtualizado)
            console.log((valorAtualizado));
    }))

})

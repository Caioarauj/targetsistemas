//manipulação de arq
const fs = require('fs');

function processFaturamentoData(filePath) {
   
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const faturamentos = Object.values(data).filter(faturamento => faturamento > 0);

    if (faturamentos.length === 0) {
        console.log('Não há dados de faturamento para processar.');
        return;
    }

    const menorFaturamento = faturamentos.reduce((min, valorAtual) => {
        return valorAtual < min ? valorAtual : min;
    }, faturamentos[0]);

    const maiorFaturamento = faturamentos.reduce((max, valorAtual) => {
        return valorAtual > max ? valorAtual : max;
    }, faturamentos[0]);

    const somaFaturamento = faturamentos.reduce((acumulador, val) => acumulador + val, 0);
    const mediaMensal = somaFaturamento / faturamentos.length;

    const diasAcimaDaMedia = Object.values(data).filter(faturamento => faturamento > mediaMensal).length;

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Média mensal de faturamento: ${mediaMensal.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

processFaturamentoData('exercicio03.json');

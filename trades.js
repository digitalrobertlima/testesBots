let tipo = "trades";
let apiBitPreco = "https://api.bitpreco.com/btc-brl/" + tipo;

function tratarTrades(bookTrades) {

	let tamanhoObj = Object.keys(bookTrades).length;
	let i = 0;
	let tipo = bookTrades[i].type;
	let quantidade = parseFloat(bookTrades[i].amount).toFixed(8);
	let timestamp = bookTrades[i].timestamp;
	let market = bookTrades[i].market;
	let preco = parseFloat(bookTrades[i].price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });

	console.log('Timestamp: ' + timestamp);
	console.log('Last trade: ' + tipo);
	console.log('Amount: ' + quantidade);
	console.log('Preço negociado: ' + preco);

	//console.log(tamanhoObj)
}

function getData(url) {

	let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	let req = new XMLHttpRequest();
	req.open('GET', url, false);
	req.send();

	let resposta = JSON.parse(req.responseText);

	//uncomment this for debugging:
	tratarTrades(resposta);
}

//INÍCIO DO PROGRAMA:

function main() {
	getData(apiBitPreco);
}

main();

setInterval(main, 3000);

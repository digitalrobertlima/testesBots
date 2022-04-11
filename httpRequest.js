//Definir URL da API:

let url = "URL_API_AQUI"

function httpRequest(url) {
  let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	let req = new XMLHttpRquest();
	
	req.open("GET", url, false);
	req.send();

	let obj = JSON.parse(req.responseText);
	
	console.log(obj);
}

function main() {

	httpRequest();

	//for debug:
	console.log('Code 200');
}

main();

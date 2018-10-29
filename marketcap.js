var header = document.querySelector('header');
	var requestURLglobal = 'https://api.coinmarketcap.com/v1/global/';
	var requestGlobal = new XMLHttpRequest();
	requestGlobal.open('GET', requestURLglobal);
	requestGlobal.responseType = 'json';
	requestGlobal.send();

requestGlobal.onload = function() {
	var marketCap = requestGlobal.response;
	populateHeader(marketCap);
}

function populateHeader(jsonObj) {
	var date = new Date();
	var n = date.toDateString();
	var time = date.toLocaleTimeString();

	var myTimeElt = document.createElement('h3');
	myTimeElt.textContent = n + ' ' + time;
	myTimeElt.style.margin = "20px";
	myTimeElt.style.color = "#375D81"; 

	var myH1Elt = document.createElement('h1');
	myH1Elt.id = "marketcap";
	myH1Elt.style.padding = "10px";
	myH1Elt.style.margin = "4px";
	myH1Elt.innerHTML = "<p style='color:#B09F91;'> Market cap : <a href='https://coinmarketcap.com/charts' style='text-decoration: none; color:#375D81;'>$" + jsonObj['total_market_cap_usd'].toLocaleString() + "</a></p>";

	
	var myBtcDominanceElt = document.createElement('h2');
	myBtcDominanceElt.style.color = "#375D81";
	myBtcDominanceElt.style.margin = "15px";
	myBtcDominanceElt.textContent = '24h Vol: $' + jsonObj['total_24h_volume_usd'].toLocaleString()  + ' / BTC Dominance: ' + jsonObj['bitcoin_percentage_of_market_cap'] + '%';

	var myPElt = document.createElement('p');
	myPElt.style.color = "#375D81";
	myPElt.style.margin = "15px";
	myPElt.textContent = "This site lists the top 50 cryptocurrencies and offers you a simple way to compare performance over the past week."
			
	header.appendChild(myH1Elt);  
	header.appendChild(myTimeElt);
	header.appendChild(myBtcDominanceElt);
	header.appendChild(myPElt);
}

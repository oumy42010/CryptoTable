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

			
	header.appendChild(myH1Elt);  
	header.appendChild(myTimeElt);
}

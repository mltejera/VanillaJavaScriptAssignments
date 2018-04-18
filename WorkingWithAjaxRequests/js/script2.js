"use strict";

// React request
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "b2eb88f0cb3608eefcd8f5e2c509ca6f";

	$.get(url + '&appid=' + apiKey).done(function(response){
		updateUISucess(response);
	 }).fail(function(error) {
		updateUIError(error);
	});

	function updateUISucess(response){
		var degC = response.main.temp - 273.15;
		var degF = degC * 1.8 + 32;

		var state = {
			condtion: response.weather[0].main,
			degCInt: Math.floor(degC),
			degFInt: Math.floor(degF)
		};

		var into = document.querySelector('#weather');
		ReactDOM.render(<Forecast {...state}/>, into);

		function Forecast(props){
			return (
				<div>
					<p>{props.degCInt} &#176; C / {props.degFInt} &#176; F</p>
					<p>{props.condition}</p>
				</div>
			)
		}
	}

	function updateUIError(error){
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}
})();

// // jQuery request
// (function() {
// 	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
// 	var apiKey = "b2eb88f0cb3608eefcd8f5e2c509ca6f";

// 	$.get(url + '&appid=' + apiKey).done(function(response){
// 		updateUISucess(response);
// 	 }).fail(function(error) {
// 		updateUIError(error);
// 	});

// 	function updateUISucess(response){
// 		var condition = response.weather[0].main;
// 		var degC = response.main.temp - 273.15;
// 		var degCInt = Math.floor(degC);
// 		var degF = degC * 1.8 + 32;
// 		var degFInt = Math.floor(degF);

// 		var $weatherBox = $('#weather');
// 		$weatherBox.append( "<p>" + degCInt + "&#176; C / "  + degFInt + "&#176; F </p><p>" + condition + "</p>");
// 	}

// 	function updateUIError(error){
// 		var $weatherBox = $('#weather');
// 		$weatherBox.addClass('hidden');
// 	}
// })();


// fetch request

// (function() {
// 	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
// 	var apiKey = "b2eb88f0cb3608eefcd8f5e2c509ca6f";

// 	fetch(url + '&appid=' + apiKey).then(function(response){
// 		if(!response.ok){
// 			throw Error(response.status);
// 		}
// 		return(response.json());
// 	}).then(function(response) {
// 			updateUISucess(response);
// 	}).catch(function(error){
// 		updateUIError(error);
// 	});

// 	function updateUISucess(response){
// 		var condition = response.weather[0].main;
// 		var degC = response.main.temp - 273.15;
// 		var degCInt = Math.floor(degC);
// 		var degF = degC * 1.8 + 32;
// 		var degFInt = Math.floor(degF);
// 		var weatherBox = document.getElementById("weather");

// 		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / "  + degFInt + "&#176; F </p><p>" + condition + "</p>";
// 	}

// 	function updateUIError(error){
// 		var weatherBox = document.getElementById("weather");
// 		weatherBox.className = "hidden";
// 		console.log(error);
// 	}
// })();


// XHR Request
// (function() {
// 	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
// 	var apiKey = "b2eb88f0cb3608eefcd8f5e2c509ca6f";
// 	var httpRequest;
// 	makeRequest();
	
// 	// create and send an XHR Request

// 	function makeRequest(){
// 		httpRequest = new XMLHttpRequest();
// 		httpRequest.onreadystatechange = responseMethod;
// 		httpRequest.open('GET', url + '&appid=' + apiKey);
// 		httpRequest.send();
// 	}

// 	// handle xhr response
// 	function responseMethod() {
// 		if(httpRequest.readyState === 4){
// 			console.log(httpRequest.responseText);

// 			if(httpRequest.status === 200){
// 				updateUISuccess(httpRequest.responseText);
// 			} else {
// 				updateUIError();
// 			}
// 		}
// 	}

// 	// handle xhr success
// 	function updateUISuccess(responseText){
// 		var response = JSON.parse(responseText);
// 		var condition = response.weather[0].main;
// 		var degC = response.main.temp - 273.15;
// 		var degCInt = Math.floor(degC);
// 		var degF = degC * 1.8 + 32;
// 		var degFInt = Math.floor(degF);
// 		var weatherBox = document.getElementById("weather");

// 		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / "  + degFInt + "&#176; F </p><p>" + condition + "</p>";
// 	}

// 	// handle xhr error
// 	function updateUIError(){
// 		var weatherBox = document.getElementById("weather");
// 		weatherBox.className = "hidden";
// 	}
// })();
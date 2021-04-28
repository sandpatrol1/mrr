'use strict';
const axios = require('axios');

exports.handler = async function(event, context, callback) {
	// your server-side functionality

	const API_KEY = 'bc014614ade2a6685e6c5b904442bd6f';

	console.log('hei there');

	let url = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${API_KEY}`;
	const config = {
		method: 'get',
		url: url,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	axios(config)
		.then((json) => {
			response = {
				statusCode: 200,
				body: json.data
			};
			console.log(response);
			callback(null, response);
		})
		.catch((err) => {
			console.log(err);
			response = {
				statusCode: 400,
				body: err.data
			};
			callback(null, response);
		});
};

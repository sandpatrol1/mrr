'use strict';
const axios = require('axios');

exports.handler = async function(event, context, callback) {
	// your server-side functionality

	// const API_KEY = 'bc014614ade2a6685e6c5b904442bd6f';

	console.log('hei there');

	let url = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=bc014614ade2a6685e6c5b904442bd6f`;
	const config = {
		url: url
	};

	return axios(config)
		.then((json) => {
			console.log(json.data);
			callback(null, {
				statusCode: 200,
				body: JSON.stringify(json.data)
			});
		})
		.catch((error) => {
			console.log(error);
			callback(null, {
				statusCode: 400,
				body: 'Access Denied'
			});
		});
};

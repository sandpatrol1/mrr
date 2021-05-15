'use strict';
const axios = require('axios');

exports.handler = async function(event, context, callback) {
	const API_KEY = process.env.WEATHER_API_KEY;
	const location = event.queryStringParameters.location;

	console.log('Weather Forecast');

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
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
				body: 'Bad Request'
			});
		});
};

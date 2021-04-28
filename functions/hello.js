exports.handler = async function(event, context) {
	// your server-side functionality

	const response = {
		statusCode: 200,
		message: 'success'
	};

	console.log('Michel func', event);

	callback(null, response);
};

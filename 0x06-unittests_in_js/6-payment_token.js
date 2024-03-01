const getPaymentTokenFromAPI = (success) => {
	if (success) {
		return Promise.resolve({ data: 'Successful response from the API' });
	} else {
		return new Promise((resolve) => {
			resolve()
		});
	}
};

module.exports = getPaymentTokenFromAPI;

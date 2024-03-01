const express = require('express');

const app = express();

const port = 7865;

app.use(express.json());

app.get('/', (request, response) => {
	response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
	response.send(`Payment methods for cart ${request.params.id}`)
});

app.get('/available_payments', (request, response) => {
	response.set("Content-Type", "application/json");
	const PaymentOptions = {
    payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
	response.send(PaymentOptions);
});

app.post('/login', (request, response) => {
	const user = request.body.user || request.body.userName;
	if (user) {
		response.send(`Welcome ${user}`);
	} else {
		response.status(404).send();
	}
});

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;

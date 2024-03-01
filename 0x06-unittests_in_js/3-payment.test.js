const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	it('should use Utils.calculateNumber with type SUM', () => {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberSpy.calledOnce).to.be.true;
		expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

		calculateNumberSpy.restore();
	});
});
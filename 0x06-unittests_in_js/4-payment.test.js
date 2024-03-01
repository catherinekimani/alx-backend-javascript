const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
	it('should use Utils.calculateNumber with type SUM', () => {
		const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consoleLogSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
		expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

		calculateNumberStub.restore();
		consoleLogSpy.restore()
	});
});

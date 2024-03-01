const request = require('request');
const { expect } = require('chai');

describe('Cart page', function () {
  it('server test', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 200 when id is a Num', function (done) {
    request.get('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is not a Num', function (done) {
    request.get('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('server test with wrong cart id', function (done) {
    request.get('http://localhost:7865/cart/wrong', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
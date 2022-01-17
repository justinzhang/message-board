//assertion tests

const chai = require('chai');
const chaiHttp = require('chai-http');
const {describe, it} = require('mocha');
const app = require('../app');
const agent = chaii.request.agent(app);

const should = chai.should();

chai.use(chaiHttp);


describe('site', function () {
	it ('Should have home page', function (done) {
		agent.get('/').end(function (err, res) {
			if (err) {
				return done(err);
			}
			res.should.have.status(200);
			return done(); //basically, fetch home page test
		});
	});
});

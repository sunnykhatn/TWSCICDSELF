const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index'); // Adjust path as necessary
const should = chai.should();

chai.use(chaiHttp);

describe('GET /', () => {
  it('it should GET the home route', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('Hello, World!');
          done();
        });
  });
});


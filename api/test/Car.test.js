const VALID_CAR = require('./data.json').VALID_CAR;
const chai = require('chai');
const chaiHttp = require('chai-http');
//let server = require("../app.js");

chai.should();

chai.use(chaiHttp);

describe('Car - Endpoints', () => {
  describe('POST /api/car', () => {
      it ('Should create a register - 201', done => {
         chain.request('http://localhost:3000')
         .post('/api/car')
         .send(VALID_CAR)
         .end((err, res) =>{
            chai.assert.isNull(err);
            chai.assert.isNotEmpty(res.body);
            res.should.have.property('error').equal(0);
            res.body.payload.comment.should.have.property('id');
           res.body.payload.comment.should.have.property('plate').equal(VALID_CAR.plate);
            res.body.payload.comment.should.have.property('renavam').equal(VALID_CAR.renavam);
          res.body.payload.comment.should.have.property('chassi').equal(VALID_CAR.chassi);
          res.body.payload.comment.should.have.property('model').equal(VALID_CAR.model);
          res.body.payload.comment.should.have.property('mark').equal(VALID_CAR.mark);
           res.body.payload.comment.should.have.property('year').equal(VALID_CAR.year);
           res.body.payload.comment.should.have.property('isDeleted').equal(false);
             done();
        })

      });
      it ('should return a registred car - 303', done => {
        chain.request('http://localhost:3000')
        .post('/api/car/')
        .end((err, res) =>{
           chai.assert.isNull(err);
           chai.assert.isNotEmpty(res.body);
           res.should.have.property('error').equal(0);
           done();
        });

        done();
      });
      it ('should return datas not filled or invalids - 500', done => {
        chain.request('http://localhost:3000')
        .post('/api/car')
        .send(VALID_CAR)
        .end((err, res) =>{
           chai.assert.isNull(err);
           chai.assert.isNotEmpty(res.body);
           res.should.have.property('error').equal(0);
           res.body.payload.comment.should.have.property('id');
           res.body.payload.comment.should.have.property('plate').equal(VALID_CAR.plate);
           res.body.payload.comment.should.have.property('renavam').equal(VALID_CAR.renavam);
           res.body.payload.comment.should.have.property('chassi').equal(VALID_CAR.chassi);
           res.body.payload.comment.should.have.property('model').equal(' ');
           res.body.payload.comment.should.have.property('mark').equal(VALID_CAR.mark);
           res.body.payload.comment.should.have.property('year').equal(VALID_CAR.year);
           done();
         });
  });
});
});

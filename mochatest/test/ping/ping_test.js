const fakedata = require('../_fakedata')

const payload = {
  name,
  email,
  ...
}

describe('Test /ping GET', () => {
  before(() => (
    fakedata.unload()
      .then(() => fakedata.load())
  ))

  it('should ping server', (done) => {
    request(app)
    .post(`/users/${fakedata.users.normal.user_id}`)
    .send(payload)
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;

      res.body.user.name.should.eql(fakedata.users.normal.name);
      
      done();
    });
  });

  before(() => (
    fakedata.unload()
  ))
});
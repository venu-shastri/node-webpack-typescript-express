import app from '../src/index';
import * as supertest from 'supertest'
describe('app', () => {
  let request:any;
  beforeEach(() => {
    request = supertest.agent(app);
  });
  it('should return a successful response for GET /', done => {
    request.get('/api/featuremesh/features')
      .expect(200, done);
  });
});
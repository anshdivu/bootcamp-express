const request = require('supertest');
const app = require('../app');

describe(app.name, () => {
  it('GET /api/heroes returns 11 heroes', async () => {
    const { body } = await request(app)
      .get('/api/heroes')
      .expect(200);

    expect(body.length).toEqual(10);
  });

  it('POST /api/heroes creates a new hero', async () => {
    const { body } = await request(app)
      .post('/api/heroes')
      .send({ name: 'john' })
      .expect(200);

    expect(body.length).toEqual(11);
  });
});

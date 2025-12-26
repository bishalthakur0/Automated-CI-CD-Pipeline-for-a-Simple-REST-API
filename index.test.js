const request = require('supertest');
const app = require('./index');

describe('GET /health', () => {
    it('should return 200 OK and status UP', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'UP');
    });
});

describe('GET /hello', () => {
    it('should return 200 OK and greeting message', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello from CI/CD Pipeline!');
    });
});

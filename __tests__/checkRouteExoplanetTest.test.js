const request = require('supertest')
const app = require('../app.js')

// test route add with supertest
describe('route exoplanets test suite', () => {
    it('should be return status code 200', () => {
        request(app)
            .get('/exoplanets/test')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err
            })
    })
})

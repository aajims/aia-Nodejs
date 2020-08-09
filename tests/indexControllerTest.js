// Import the dependencies for testing
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../bin/www')
chai.use(chaiHttp)
chai.should()


describe("index", () => {
    describe("GET /", () => {
        // Test to get all index record
        it("should get all index record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200)
                     res.body.should.be.a('array')
                     done()
                  })
         })
    })
})
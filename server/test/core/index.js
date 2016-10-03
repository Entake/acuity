// Our modules
// import createServer from '../helpers/createServer'
import server from '../../src/server'
import supertest from 'supertest'

export default (test) => {
  let request
  test((t) => {
    request = supertest(server.listen(3000))
    t.end()
  })

  test('GET /', (t) => {
    request.get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        const expected = 'Hello world!'
        const actual = res.text

        t.error(err, 'No error')
        t.equal(actual, expected, 'Retrieve body')
        t.end()
      })
  })

  test('404 on nonexistant URL', (t) => {
    request.get('/GETShouldFailOnRandomURL')
      .expect(404)
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        const expected = 'Cannot GET /GETShouldFailOnRandomURL\n'
        const actual = res.text

        t.error(err, 'No error')
        t.equal(actual, expected, 'Retrieve body')
        t.end()
      })
  })
}

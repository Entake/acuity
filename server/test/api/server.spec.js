import createServer from '../helpers/createServer'

describe('Acuity API', () => {
  let request
  before(async () => {
    request = await createServer()
  })

  describe('GET /', () => {
    it('Returns R&M reference', async () => {
      await request.get('/')
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect((err, res) => {
          if (err) return err

          expect(res.text).to.equal('I\'m mr. Meeseeks!')
        })
    })
  })

  describe('GET /RandomURL', () => {
    it('Returns 404 on nonexistant URL', async () => {
      await request.get('/RandomURL')
        .expect(404)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect((err, res) => {
          if (err) return err

          expect(res.text).to.equal('Not found')
        })
    })
  })
})

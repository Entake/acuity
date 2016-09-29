import createServer from '../helpers/createServer'

describe('Acuity API', () => {
  let request
  before(async () => {
    request = await createServer()
  })

  describe('GET /', () => {
    it('presses the button on the sacred box', async () => {
      await request.get('/')
        .expect(200, {
          data: 'I\'m mr. Meeseeks!'
        })
    })
  })
})

import createServer from '../helpers/createServer'

export default describe('Acuity auth', () => {
  let request
  before(async () => {
    request = await createServer()
  })

  describe('POST /register', () => {
    it('Should fail to register with mismatching passwords', async () => {
      await request.post('/api/register')
        .send({login: 'test', password: '123', passwordRepeat: '321'})
        .expect(400)
        .expect('Content-Type', /json/)
        .expect((err, res) => {
          if (err) return err

          expect(res.body).to.deepEqual({error: 'Passwords do not match!'})
        })
    })
  })
})

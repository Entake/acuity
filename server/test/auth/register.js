export const register = (test, request) => {
  test('Should register with given username and password', (t) => {
    request.post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: '123'})
      .expect(201)
      .end((err) => {
        t.error(err, 'No error')
        t.end()
      })
  })

  test('Should register second user with given username and password', (t) => {
    request.post('/api/register')
      .send({login: 'other', password: '321', passwordRepeat: '321'})
      .expect(201)
      .end((err) => {
        t.error(err, 'No error')
        t.end()
      })
  })

  test('Should fail to register with same username', (t) => {
    request.post('/api/register')
      .send({login: 'test', password: 'aaa', passwordRepeat: 'aaa'})
      .expect(403)
      .end((err, res) => {
        const expected = {error: 'User already exists!'}
        const actual = res.body

        t.error(err, 'No error')
        t.deepEqual(actual, expected, 'Retrieve body')
        t.end()
      })
  })

  test('Should fail to register with mismatching passwords', (t) => {
    request.post('/api/register')
      .send({login: 'test', password: '123', passwordRepeat: '321'})
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const expected = {error: 'Passwords do not match!'}
        const actual = res.body

        t.error(err, 'No error')
        t.deepEqual(actual, expected, 'Retrieve body')
        t.end()
      })
  })
}

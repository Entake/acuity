// Libraries
import jwt from 'jsonwebtoken'

// Our modules
import { auth as authConfig } from '../../config'

export const login = (test, request) => {
  test('Should login with existing login and password', (t) => {
    request.post('/api/login')
      .send({login: 'test', password: '123'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const actual = res.body

        t.error(err, 'No error')
        t.ok(actual.user, 'User exists')
        t.ok(actual.token, 'Token exists')

        const decodedUser = jwt.verify(actual.token, authConfig.jwtSecret)
        delete decodedUser.iat

        t.equal(actual.user.login, 'test', 'Login matches request')
        t.notOk(actual.user.password, 'No password included')
        t.deepEqual(actual.user, decodedUser, 'User must match token')

        t.end()
      })
  })

  test('Should login with other existing username and password', (t) => {
    request.post('/api/login')
      .send({login: 'other', password: '321'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        const actual = res.body

        t.error(err, 'No error')
        t.ok(actual.user, 'User exists')
        t.ok(actual.token, 'Token exists')

        const decodedUser = jwt.verify(actual.token, authConfig.jwtSecret)
        delete decodedUser.iat

        t.equal(actual.user.login, 'other', 'Login matches request')
        t.notOk(actual.user.password, 'No password included')
        t.deepEqual(actual.user, decodedUser, 'User must match token')

        t.end()
      })
  })

  test('Should fail to login with wrong password', (t) => {
    request.post('/api/login')
      .send({login: 'test', password: 'aaa'})
      .expect(401)
      .end(err => {
        t.error(err, 'No error')
        t.end()
      })
  })

  test('Should fail to login with nonexistant user', (t) => {
    request.post('/api/login')
      .send({login: 'birdPerson', password: 'inBirdCultureThatIsConsideredADickMove'})
      .expect(401)
      .end(err => {
        t.error(err, 'No error')
        t.end()
      })
  })
}

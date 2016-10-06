export default (test, request) => {
  test('GET /', (t) => {
    request.get('/')
      .expect(200)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((err, res) => {
        const expected = 'I\'m mr. Meeseeks!'
        const actual = res.text

        t.error(err, 'No error')
        t.equal(actual, expected, 'Retrieve body')
        t.end()
      })
  })

  test('404 on nonexistant URL', (t) => {
    request.get('/GETShouldFailOnRandomURL')
      .expect(404)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((err, res) => {
        const expected = 'Not Found'
        const actual = res.text

        t.error(err, 'No error')
        t.equal(actual, expected, 'Retrieve body')
        t.end()
      })
  })
}

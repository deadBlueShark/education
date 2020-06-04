const request = require('request');

describe('calc', () => {
  it('should plus 2 and 2', () => {
    expect(2 + 2).toBe(4);
  })
})

describe('get messages', () => {
  it('should return 200 OK', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    })
  })

  it('should return unempty list', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done();
    })
  })
})

describe('get messages of user', () => {
  it('should return 200 status', (done) => {
    request.get('http://localhost:3000/user/James/messages', (err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    })
  })

  it("should return James's messages", (done) => {
    request.get('http://localhost:3000/user/James/messages', (err, res) => {
      JSON.parse(res.body).forEach(message => {
        expect(message.name).toEqual('James');
      })
      done();
    })
  })
})

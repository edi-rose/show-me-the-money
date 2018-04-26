 
var request = require('supertest')

var createServer = require('../../server/server')
var meetingsDb = require('../../server/db/meetings')
var setupDb = require('./setup-db')

setupDb(test,createServer)

// test.cb('GET /', t => {
//   request(t.context.app)
//     .get('/api/meetings')
//     .expect(200)
//     .end((err,res) => {
//       if (err) console.log(err);
//       t.is(res.body.length, 3)
//       t.end()
//     })
// })

// test.cb('read greetings db', t => {
//   meetingsDb.getGreetings(t.context.db)
//     .then(greetings => {
//       t.is(greetings.length, 3)
//       t.true(greetings[0].hasOwnProperty('text'))
//       t.end()
//     })
// })

const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const http = require('http').Server(app);
global.io = require('socket.io')(http);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'))


app.get('/', (req, res) => { // home page
    res.render('home.hbs')
})

// app.get('/generatenewidroom', (req, res) => { // home page
//   res.send(JSON.stringify({
//     newId: controller.generateNewIDRoom()
//   }))
// })
// app.get('/check', (req, res) => { // home page
//   console.log(io.sockets.adapter.rooms)
//   res.end()
// })
app.get('/room', (req, res) => { // home page
    res.render('room', {
      id: req.query.id
    })
})
require('./socketcontroller').on()


http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
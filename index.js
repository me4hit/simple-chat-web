const express = require('express')
const path = require('path')
const controller = require('./controler')
const app = express()
const port = 3000
const http = require('http').Server(app);
global.rooms = [0000];
global.io = require('socket.io')(http);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'))


app.get('/', (req, res) => { // home page
    res.render('home.hbs')
})

app.get('/generatenewidroom', (req, res) => { // home page
  res.send(JSON.stringify({
    newId: controller.generateNewIDRoom()
  }))
})

app.get('/room', (req, res) => { // home page

  res.send('gia nhập phòng ' +  req.query.id)
 // res.render('home.hbs')

})

io.on('connection', (socket) => {
  console.log('a user connected');
});


http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
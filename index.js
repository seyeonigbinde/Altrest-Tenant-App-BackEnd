const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const path = require('path')

// const server = express()

// server.use(express.json())
// server.use(cors())
// server.use(express.static(path.join(__dirname, 'client/build'))) // static assets

// console.log(process.env.USER) 
// console.log(process.env.SHELL)

// if (process.env.NODE_ENV === 'production') {
//   console.log('this means this code is deployed')
// }

// const PORT = process.env.PORT || 3000

// console.log('port is -> ', PORT)

// server.get('/', (req, res) => {
//   // sending back index.html
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// })

// server.get('/api', (req, res) => {
//   res.json({ message: `${process.env.COHORT} ROCKS` })
// })

// server.use((req, res) => {
//   res.status(404).json({ message: 'not found sorry' })
// })

// server.listen(PORT, () => {
//   console.log(`listening on ${PORT}`)
// })
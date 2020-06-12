const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001

const { consolidado } = require('../modules/consolidado')
app.use('/api/consolidado', consolidado)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../build')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'))
  })
}

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
)
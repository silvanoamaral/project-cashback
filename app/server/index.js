const express = require('express')
const path = require('path')
const newrelic = require('newrelic')

const app = express()
const port = process.env.PORT || 3001
app.locals.newrelic = newrelic

const { consolidado } = require('../modules/consolidado')
app.use('/api/consolidado', consolidado)

const DIST_DIR = path.join(__dirname, '../../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(DIST_DIR))
  
  app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
  })
}

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
)

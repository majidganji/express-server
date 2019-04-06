require('./global')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

const logStream = fs.createWriteStream(path.join(path.join(__dirname, 'logs'), 'requests.log'), {flags: 'a'})
app.use(logger('dev', {
  stream:logStream
}));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('./components/response'))
app.use(require('./components/ErrorHandeling'));

app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
const express = require('express')
const bodyParser = require('body-parser')

const medicine = require('./routes/medicine-route')
const user = require('./routes/user-route')

const app = express()
const port = 3000

app.use(express.static("images"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1/medicine', medicine);
app.use('/api/v1/user', user);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express= require('express')
const app= express()
const router= require('./routes/routes')
const connectdb= require('./database/database')
const bodyParser = require("body-parser")
app.set("view engine","ejs")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router)
connectdb()
app.listen(3000)
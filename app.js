const config = require('./config/config')
const express = require('express')
const session = require('express-session')
const sessionStore = require('./mongoose/sessionStore')

const app = express()

app.use(express.json())
//app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: config.session.secret,
    key: config.session.key,
    cookie: config.session.cookie,
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}))

app.use(require('./routes/auth.users'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))

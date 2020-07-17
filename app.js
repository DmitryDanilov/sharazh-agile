const config = require('./config')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')

const app = express()

require('./config/passport')(passport)

const db = require('./config/db').url

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log('Mongo connected'))
    .catch(err => console.log(err))

app.use(express.json())

app.use(cookieParser(config.session.secret))

app.use(session({
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

/*app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
})*/

app.use('/', require('./routes/index'))
app.use('/api', require('./routes/users'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))

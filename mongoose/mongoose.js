const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.Promise = Promise
mongoose.set('useUnifiedTopology', true)

mongoose.connect(config.mongoose.uri, config.mongoose.options)

module.exports = mongoose
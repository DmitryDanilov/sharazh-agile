const config = {}

config.port = 5000

config.mongoose = {
    "uri": "mongodb://localhost:27017/sharazh-agile",
    "options": {
        "keepAlive": 1,
        "autoIndex": false,
        "useNewUrlParser": true,
        "poolSize": 10
    }
}

config.session = {
    "secret": "mySecret",
    "key": "sid",
    "cookie": {
        "path": "/",
        "httpOnly": true,
        "maxAge": null
    }
}

module.exports = config
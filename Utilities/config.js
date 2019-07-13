let environment = require('./environment').environment;

let serverURLs = {
    // "dev": {
    //     "NODE_SERVER": "http://localhost",
    //     "NODE_SERVER_PORT": "5050",
    //     "MONGO_DB": "mongodb://13.126.131.184:27017/WAKINEW?authSource=admin",
    //     "EMAIL_USER": 'toothfairysanjeet@gmail.com',
    //     "EMAIL_PASS": 'Sanj1234A',
    //     "EMAIL_HOST": 'smtp.gmail.com',
    //     "EMAIL_PORT": 465,
    //     "EMAIL_SECURE": true,
    //     "CRON_PATTERN": '1 * * * * *',
    //     "web_url": 'https://www.waki.store:6262/v1'
    // },
    "staging": {
        "NODE_SERVER": "http://13.126.131.184",
        "NODE_SERVER_PORT": "5050",
        "MONGO_DB": "mongodb://18.218.243.162:27017/APP_MONSTER?authSource=admin",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '1 * * * * *',
        "web_url": 'https://13.126.131.184:5050/v1'
    },
    "local": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "5050",
        "MONGO_DB": "mongodb://localhost:27017/APP_MONSTER",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '1 * * * * *',
        "web_url": 'http://localhost:5050/v1'
    },
    "live": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "6262",
        "MONGO_DB": "mongodb://18.218.243.162:27017/APP_MONSTER",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '1 * * * * *',
        "web_url": 'https://www.waki.store/vendor',
        "webSite": "https://www.waki.store/shop"
    },

}
let config = {
    "OTP_SMS_CONFIG": {
        "url": `${serverURLs[environment].SMS_API}`
    },
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    },
    "CRON_PATTERN": {
        "pattern": `${serverURLs[environment].CRON_PATTERN}`
    },
    "OTP_EMAIL_CONFIG": {
        "host": `${serverURLs[environment].EMAIL_HOST}`,
        "port": `${serverURLs[environment].EMAIL_PORT}`,
        "secure": `${serverURLs[environment].EMAIL_SECURE}`,
        "auth": {
            "user": `${serverURLs[environment].EMAIL_USER}`,
            "pass": `${serverURLs[environment].EMAIL_PASS}`,
        }
    },
    "web__url": {
        "host": `${serverURLs[environment].web_url}`
    },
    "website_url": {
        "host": `${serverURLs[environment].webSite}`
    }
};

module.exports = {
    config: config
};
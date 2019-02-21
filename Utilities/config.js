let environment = require('./environment').environment;

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "5050",
        "MONGO_DB": "mongodb://admin:oursport_admin@13.126.131.184:27017/WAKINEW?authSource=admin",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '1 * * * * *',
    },
    "staging": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "6262",
        "MONGO_DB": "mongodb://admin:oursport_admin@13.126.131.184:27017/WAKINEW?authSource=admin",
        "EMAIL_USER": 'toothfairysanjeet@gmail.com',
        "EMAIL_PASS": 'Sanj1234A',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": 465,
        "EMAIL_SECURE": true,
        "CRON_PATTERN": '1 * * * * *',
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
    }
};

module.exports = {
    config: config
};

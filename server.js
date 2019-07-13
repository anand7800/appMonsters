let app = require('express')(),
    fs = require('fs'),
    env = require('./Utilities/environment').environment,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    path = require('path'),
    util = require('./Utilities/util'),
    config = require("./Utilities/config").config,
    mongoConnect = require('./Utilities/mongooseConfig'),
    morgan = require("morgan"),
    async = require('async'),
    waterfall = require('async-waterfall'),
    request = require('request'),
    commonfunction = require('./commonFile/commonFunction'),
    paytabs = require('paytabs_api'),
    configJson = require('./config/config'),
    _ = require('lodash');

var server = require('http').Server(app);

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//!userRoutes
let userAppService = require('./Routes/userAppRoute/userAppRoute') /* userApplication router */
let adminPanelRouter = require('./Routes/adminPanelRoute/adminPanelRoute') /* adminPanelRouter  */
app.use('/app', userAppService)
app.use('/admin', adminPanelRouter)

// app.use("/", express.static(path.join(__dirname, 'dist')));
// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/dist/index.html`);
// })

server.listen(6262, function() {
    console.log('app listening on port:' + config.NODE_SERVER_PORT.port + (new Date));
});
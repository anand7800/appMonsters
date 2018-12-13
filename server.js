let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser')
express = require('express'),
    cors = require('cors'),
    http = require('http'),
    path = require('path');
util = require('./Utilities/util'),
    config = require("./Utilities/config").config,
    mongoConnect = require('./Utilities/mongooseConfig')
morgan = require("morgan")
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/views'));
// app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"))
app.get('/', (req, res) => {
    res.send("server is running")
})
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');



//!dotENV
/* 
var dotenv = require('dotenv/config');
console.log("ssdsds",process.env.superKey) */
//!userRoutes
var userRoutes = require('./Routes/userRoutes/userPanelRoutes')
var vendorRoutes = require('./Routes/vendorRoutes/vendorpanelRoutes')
app.use('/user', userRoutes)
app.use('/vendor', vendorRoutes)
/* app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/Anzenadmin/index.html')
  }); */
server.listen(config.NODE_SERVER_PORT.port, function () {
    console.log('app listening on port:' + config.NODE_SERVER_PORT.port);
});

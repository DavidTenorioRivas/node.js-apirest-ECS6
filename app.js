var express = require('express');
var bodyParser = require('body-parser');
var config = require("./config/config");
var handleConnection = require("./config/handleConnection");
var UserEntity = require('./entity/UserEntity');
var app = express();
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

handleConnection.connect({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port

}).then((connectionObject)=> {
    console.log('Ready');
    let userEntity = UserEntity(connectionObject);
    require('./routes/user')(app, userEntity);
    require('./routes/index')(app);
    app.listen(8080);
});

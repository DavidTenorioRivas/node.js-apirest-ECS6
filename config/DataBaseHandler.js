/**
 * Created by user on 31/03/2017.
 */
var mysql = require("mysql");

module.exports.DataBaseHandler=()=>{
    this.connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'CHIRINOS',
        port: 3306
    });
    return connection;
};
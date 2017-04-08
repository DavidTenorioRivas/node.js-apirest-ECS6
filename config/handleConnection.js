'use strict';
var mysql = require('mysql');

module.exports.connect = (connectionSettings) => {

    return new Promise((resolve, reject) => {

            if (!connectionSettings.host) throw new Error("A host must be specified.");
            if (!connectionSettings.user) throw new Error("A user must be specified.");
            if (!connectionSettings.database) throw new Error("A database must be specified.");
            if (!connectionSettings.port) throw new Error("A port must be specified.");

            let connectionObject = mysql.createConnection({
                host: connectionSettings.host ,
                user: connectionSettings.user,
                password: connectionSettings.password,
                database: connectionSettings.database,
                port: connectionSettings.port
                });
            resolve(connectionObject);
        });
};
'use strict';
class UserEntity {
    constructor(connectionObject) {
        this.connectionObject = connectionObject;
    }

    getUser() {
        return new Promise((resolve, reject) => {
            this.connectionObject.query('CALL sp_GetUser();', function (error, result, fields) {
                if (error) throw error;
                if (result[0].length == 0) {
                    resolve({
                        status: 'ERROR',
                        message: 'NO EXISTE USUARIO EN LA BD'
                    });
                } else {
                    resolve({
                        status: 'SUCCES',
                        message: 'User was found',
                        data: result[0]
                    });
                }
            });
        });
    }
    postUser(_name, _lastname, _gender) {
        return new Promise((resolve, reject)=> {

            this.connectionObject.query('CALL sp_PostUser(?,?,?);', [_name, _lastname, _gender], function (error, result, fields) {
                if (error) throw error;

                console.log(result.affectedRows);
                if (result.affectedRows == 1) {
                    resolve({
                        status: "SUCCESS",
                        message: "Customer Inserted"
                    });
                } else {
                    resolve({
                        status: "ERROR",
                        message: "Ocurrio un error"
                    });
                }
            });
        });
    }

    disconnect() {
        this.connectionObject.end();
    }
}
module.exports = (connectionObject)=> {
    return new UserEntity(connectionObject);
};
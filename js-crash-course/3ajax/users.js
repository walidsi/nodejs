//var async = require('async');
const sqlite3 = require('sqlite3').verbose();

function getUsers(callback) {
    return new Promise((resolve, reject) => {
        let db = new sqlite3.Database('./users.db', sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the users database.');
        });

        sql = 'SELECT * FROM user';

        let result = [];
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                for (const row of rows) {
                    json_str = `{"name": "${row.name}"}`;
                    result.push(json_str);
                }
                result = '[' + result.toString() + ']';
                resolve(result);
                callback(result);
            }
        });
        db.close();
    });
}

function addUser(name, callback) {
    return new Promise((resolve, reject) => {
        let db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the users database.');
        });

        sql = 'INSERT INTO user VALUES(?)';

        db.run(sql, [name], function (err) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                result = 'Added user: ' + name;
                console.log(result);
                resolve(result);
                callback(result);
            }
        });

        db.close();
    });
}

module.exports = { getUsers, addUser }


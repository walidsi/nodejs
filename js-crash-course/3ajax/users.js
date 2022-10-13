//var async = require('async');
const sqlite3 = require('sqlite3').verbose();

function getUsers(callback) {
    let db = new sqlite3.Database('./users.db', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
            json_str = `{"msg": "${err.message}"}`;
            callback(null, json_str);
        }
        console.log('Connected to the users database.');
    });

    sql = 'SELECT * FROM user';

    let result = [];
    db.all(sql, (err, rows) => {
        if (err) {
            json_str = `{"msg": "${err.message}"}`;
            callback(null, json_str);
        }
        else {
            for (const row of rows) {
                json_str = `{"name": "${row.name}"}`;
                result.push(json_str);
            }
            result = '[' + result.toString() + ']';
            callback(result, null);
        }
    });
    db.close();
}

function addUser(name, callback) {
    let db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
            json_str = `{"msg": "${err.message}"}`;
            callback(null, json_str);
        }
        console.log('Connected to the users database.');
    });

    sql = 'INSERT INTO user VALUES(?)';

    db.run(sql, [name], function (err) {
        if (err) {
            console.log(err.message);
            json_str = `{"msg": "${err.message}"}`;
            callback(null, json_str);
        }
        else {
            result = 'Added user: ' + name;
            console.log(result);
            callback(result);
        }
    });
    db.close();
}

module.exports = { getUsers, addUser }


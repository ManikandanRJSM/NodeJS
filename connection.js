const os        = require('os');
const mysql     = require('mysql');

const connection = mysql.createConnection({
    host        : '127.0.1.1',
    user        : 'root',
    password    : '',
    database    : 'nodejs',

});
// connection.connect( () => {});

module.exports = connection;

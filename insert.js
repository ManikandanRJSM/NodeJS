const connection = require('./connection');

if(connection != 'true'){
    console.error(connection);
}
var sql = 'INSERT INTO users (name, email, password, ocuupation) VALUE ("mani", "mani@gmail.com", "12345", "Dodejs Developer")'
connection.query(sql, (error, result) => {
    if(error){
        throw error;
        return false;
    }
    console.log(result);
})

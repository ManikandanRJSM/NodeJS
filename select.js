const connection = require('./connection');

connection.connect( (error) => {
    if(error) throw error;return false;
    
});
function getAllUser(){
    var sql = 'SELECT *FROM users'
    connection.query(sql, (error, results, feilds) => {
        const userdatas = [];
        if(error){
            throw error;
            return false;
        }
        for(result of results){
            userdatas.push({
                id          : result.id,
                name        : result.name,
                email       : result.email,
                occupation  : result.ocuupation,
            });
        }
        console.log(userdatas);
    })
}
function getUser(id){
    var sql = `SELECT *FROM users where id = ${id}`;
    connection.query(sql, (error, result, feilds) => {
        const userdata = [];
        if(error){
            throw error;
            return false;
        }
        for(user of result){
            userdata.push({
                id          : user.id,
                name        : user.name,
                email       : user.email,
                occupation  : user.ocuupation,
            });
        }
        console.log(userdata);
    })
}
// getAllUser();

getUser(1);

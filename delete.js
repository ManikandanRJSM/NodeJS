const connection = require('./connection');

connection.connect( (error) => {
    if(error) throw error;return false;
    
});
function deleteUser(id){
    var sql = `DELETE FROM users WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        const userdata = [];
        if(error){
            throw error;
            return false;
        }
        
        console.log(`Record deleted sucessfully ${result.affectedRows}`);
    })
}

deleteUser(3);


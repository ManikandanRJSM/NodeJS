const connection = require('./connection');

connection.connect( (error) => {
    if(error) throw error;return false;
    
});
function updateUser(id, name, email){
    var sql = `UPDATE users SET name = "${name}", email = "${email}" WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        const userdata = [];
        if(error){
            throw error;
            return false;
        }
        
        console.log(`Record updated sucessfully ${result.affectedRows}`);
    })
}

updateUser(2, 'kandan', 'kandan@gmail.com');


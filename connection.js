const mysql= require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'assignment'
});

connection.connect( err => {
    if(err){
        console.log(err);
    } else {
        console.log('connected');
        
    }
});

module.exports = connection;
const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

connection.connect(function (err) {
    if (err) throw err;
    createDepartment();
  });


const connection = mysql.createConnection({
    host: 'localhost',

    
    port: 3306,

   
    user: 'root',

    
    password: 'password',
    database: 'employee_database'
});
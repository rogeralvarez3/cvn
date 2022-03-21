const mysql = require("mysql");
const cn = getMySqlConnection();
function getMySqlConnection(){
    mysql.createConnection({
        host:"localhost",
        database:"cvn",
        user:"root",
        password:"Cc123456@"
    })
    cn.onerror=err=>{
        console.log(err,"... reconectando...")
        cn = getMySqlConnection();
    }
}
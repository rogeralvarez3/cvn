const mysql = require("mysql");
const { param } = require("./routes");
const cn = getMySqlConnection();
function getMySqlConnection() {
  return mysql.createConnection({
    host: "localhost",
    database: "cvn",
    user: "root",
    password: "Cc123456@",
  });
}
cn.onerror = (err) => {
  console.log(err, "... reconectando...");
  cn = getMySqlConnection();
};

function get(parameters, callback) {
  if (!parameters.isLogin && parameters.table == "users") {
    callback(null);
    return;
  } else {
    let fields = parameters.fields
      ? Array.isArray(parameters.fields)
        ? parameters.fields.join(",")
        : parameters.fields
      : "*";
    let condition = parameters.condition
      ? ` where ${parameters.condition}`
      : "";
    let order = parameters.order ? ` order by ${parameters.order}` : "";
    let sql = `select ${fields} from ${parameters.table}${condition}${order}`;
    cn.query(sql, (err, rows) => {
      callback(err ? err : rows);
    });
  }
}

function save(parameters, callback) {
  let fields = [],
    values = [],
    fieldsAndValues = [],
    sql = "";
  let id = parameters.data.id;
  delete parameters.data.id;
  Object.keys(parameters.data).forEach((key) => {
    let field = `\`${key}\``;
    let value = parameters.data[key] ? "null" : `'${parameters.data[key]}'`;
    fields.push(field);
    values.push(value);
    fieldsAndValues.push(`${field}=${value}`);
  });
  if (id) {
    sql = `update ${parameters.table} set ${fieldsAndValues} where id=${id};`;
  } else {
    sql = `insert into ${parameters.table}(${fields}) values(${values});`;
  }
  cn.query(sql, (err, result) => {
    err ? callback(err) : callback(result);
  });
}

function remove(parameters, callback) {
  let sql = `delete from ${parameters.table} where id=${parameters.id}`;
  cn.query(sql, (err, result) => {
    err ? callback(err) : callback(result);
  });
}
module.exports = { get, save, remove };

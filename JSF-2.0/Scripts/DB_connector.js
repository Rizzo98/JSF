module.exports = function(sql){
  //TODO creade db
  var db = new sql.Db({
    platform: "SQLite",
    file: "./chinook.db",
    schema: [
      {
        name: "test",
        sql: ["create table if not exists employees (id integer primary key, test1 text)"]
      }]
  });

  db.query('SELECT * FROM employees',(err,rows)=>{
    console.log(rows)
  })
  db.close();

}

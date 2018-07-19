module.exports = function(sql){
  //TODO create db
  var db = new sql.Db({
    platform: "SQLite",
    file: "./Database/db.db",
    schema: [
      {
        name: "default",
        sql: [
              "create table if not exists User (id integer primary key autoincrement, usr text not null, mail text not null, pwd text not null)",
              "create table if not exists Combat_file (id integer primary key autoincrement, usr_id integer, txt text not null, parsed_txt text not null, foreign key(usr_id) references User(id))",
              "create table if not exists Match_type (id integer primary key autoincrement, name text not null, n_usr integer not null)",
              "create table if not exists Current_match (id integer primary key autoincrement, date DATE DEFAULT (datetime('now','localtime')), state text default('searching'), type integer not null, missing_users integer not null,foreign key(type) references Match_type(id))",
              "create trigger change_missing_users after insert on Current_match begin  = (select name from Match_type where id = new.type limit 1)" //TODO finire trigger
             ]
      }]
  });

  db.close();

}

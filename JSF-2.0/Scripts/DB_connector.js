var d;
module.exports = {
  createDB : function(sql){

    var db = new sql.Db({
      platform: "SQLite",
      file: "./Database/db.db",
      schema: [
        {
          name: "default",
          sql: [
                "create table if not exists User (id integer primary key autoincrement, usr text not null, mail text not null, pwd text not null)",
                "create table if not exists Combat_file (id integer primary key autoincrement, usr_id integer,name text not null, txt text not null, parsed_txt text not null, foreign key(usr_id) references User(id))",
                "create table if not exists Match_type (id integer primary key autoincrement, name text not null, n_usr integer not null)",
                "create table if not exists Current_match (id text primary key , date DATE DEFAULT (datetime('now','localtime')), state text default('searching'), type integer not null, missing_users integer,foreign key(type) references Match_type(id))",
                "CREATE TRIGGER if not exists change_missing_users AFTER INSERT on Current_match BEGIN UPDATE Current_match SET missing_users = (select n_usr from Match_type where new.type = Match_type.id)-1 WHERE Current_match.id = new.id;END;",
                "create table if not exists User_Pool(id integer primary key autoincrement, usr_id integer not null, type integer not null,time DATE DEFAULT (datetime('now','localtime')) ,foreign key(usr_id) references User(id),foreign key(type) references Match_type(id))",
                "create table if not exists User_in_match(id integer primary key autoincrement, usr_id integer not null, current_match_id integer not null, combat_file_id integer not null, foreign key(usr_id) references User(id),foreign key(current_match_id) references Current_match(id),foreign key(combat_file_id) references Combat_file(id))"
               ]
        }]
    });

    d = db;
  },

  create_match : function(id,type){
    d.execute('insert into Current_match("id","date","type") values("'+id+'",datetime("now"),'+type+')')
  },

  get_user : function(usr,callback){
    d.query('select * from User where usr = "' + usr + '"',(err,rows)=>{
      if(!err)
        callback(rows)
      else
        callback(err)
    })
  },

  register_user : function(usr,hashed,mail){
    d.execute('insert into "User"(usr,mail,pwd) values("'+usr+'","'+mail+'","'+hashed+'") ')
  },

  add_combatFile : function(name,usr_id,txt,parsed){
    d.execute('insert into Combat_file(usr_id,name,txt,parsed_txt) values("'+usr_id+'","'+name+'","'+txt+'",'+"'"+parsed+"'"+')')
  },

  get_combatFile : function(usr_id,callback){
    d.query('select * from Combat_file where usr_id = ' + usr_id,(err,rows)=>{
      if(!err)
        callback(rows)
      else
        callback(err)
    })
  }


}

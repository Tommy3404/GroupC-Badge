import mysql from "npm:mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "web",
  password: "AGoodPassword",
  database: "EduBadge"
})

connection.connect((err)=> {
  if(err) console.log(err);
})


connection.query(`SELECT * FROM users`, (err, results)=> {
        if(err) throw err
        console.log(results);
        
      })

connection.query(`SELECT * FROM Badges`, (err, results)=> {
        if(err) throw err
        console.log(results);
        
      })

connection.query(`SELECT * FROM challenges`, (err, results)=> {
        if(err) throw err
        console.log(results);
        
      })
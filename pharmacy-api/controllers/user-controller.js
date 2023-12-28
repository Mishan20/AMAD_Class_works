const connection = require("../db/db-connection");

const register = (req, res) => {
  connection.query(
    "insert into user values(?,?,?,?)",
    [req.body.uid, req.body.user_name, req.body.email, req.body.password],
    (err, rows) => {
      if (err) {
        res.json({ result: "failed" });
      } else {
        res.json({ result: "success" });
      }
    }
  );
};

const login = (req, res) => {
  connection.query(
    "select * from user where email=?",
    [req.body.email],
    (err, rows) => {
      if (err) {
        res.json({ result: "failed" });
      } else {
        console.log(rows[0].password);
        if(rows[0].password == req.body.password){
            res.json({ result: "success" });
        }else{
            res.json({ result: "failed" });
        }
          
        // res.json({ "result": "success" })
      
    }
    }
  );
};

module.exports = { register, login };

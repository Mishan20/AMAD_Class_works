const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1537815378",
  database: "pharmacy",
});

connection.connect();

app.get("/", (req, res) => {
  connection.query(
    'select * from medicine',
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.post("/", (req, res) => {
  connection.query(
    "insert into medicine values(?,?,?,?,?)",
    [req.body.mid, req.body.name, req.body.qty, req.body.price, req.body.sid],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.delete("/:id", (req, res) => {
  connection.query(
    "delete from medicine where mid=?",
    [req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.put("/:id", (req, res) => {
  connection.query(
    "update medicine set name=?, qty=?, price=?, sid=? where mid=?",
    [req.body.name, req.body.qty, req.body.price, req.body.sid, req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

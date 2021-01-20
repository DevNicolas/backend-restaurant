const express = require("express");
const dbConn = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors);

const port = process.env.PORT || 5000;

app.get("/api/menu1", (req, res) => {
  dbConn.query("SELECT * FROM menu1", function (err, rows) {
    if (!err) {
      return res.status(200).send(rows);
    } else {
      throw console.log(err);
    }
  });
});
app.get("/api/menu2", (req, res) => {
  dbConn.query("SELECT * FROM menu2", function (err, rows) {
    if (!err) {
      return res.send(rows);
    } else {
      throw console.log(err);
    }
  });
  res.send("hola");
});
app.get("/api/menu3", (req, res) => {
  dbConn.query("SELECT * FROM menu3", function (err, rows) {
    if (!err) {
      res.status(200).send(rows);
    } else {
      console.log(err);
    }
  });
});
app.put("/api/editMenu1", (req, res) => {
  let { opcion1, opcion2, opcion3, opcion4 } = req.body;

  dbConn.query(
    `UPDATE menu1 SET opcion1=${opcion1}, opcion2=${opcion2}, opcion3=${opcion3}, opcion4=${opcion4}`,
    function (err, result) {
      if (!err) {
        console.log(result);
        res.status(200).send("Menu Actualizado Correctamente");
      } else {
        res.status(502).send("No se pudo actualizar el Menu");
        console.log(err);
      }
    }
  );
});
app.put("/api/editMenu2", (req, res) => {
  let { opcion1, opcion2, opcion3, opcion4 } = req.body;

  dbConn.query(
    `UPDATE menu2 SET opcion1=${opcion1}, opcion2=${opcion2}, opcion3=${opcion3}, opcion4=${opcion4}`,
    function (err, result) {
      if (!err) {
        console.log(result);
        res.status(200).send("Menu Actualizado Correctamente");
      } else {
        res.status(502).send("No se pudo actualizar el Menu");
        console.log(err);
      }
    }
  );
});
app.put("/api/editMenu3", (req, res) => {
  let { opcion1, opcion2, opcion3, opcion4 } = req.body;

  dbConn.query(
    `UPDATE menu3 SET opcion1=${opcion1}, opcion2=${opcion2}, opcion3=${opcion3}, opcion4=${opcion4}`,
    function (err, result) {
      if (!err) {
        console.log(result);
        res.status(200).send("Menu Actualizado Correctamente");
      } else {
        res.status(502).send("No se pudo actualizar el Menu");
        console.log(err);
      }
    }
  );
});
app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  dbConn.query(
    `SELECT * FROM users where email = ${email} AND password=${password}`,
    function (err) {
      if (!err) {
        return res.status(200).send("exito");
      } else {
        return res.status(502).send("Credenciales Incorrectas");
      }
    }
  );
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

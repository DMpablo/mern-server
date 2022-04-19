const express = require("express");
const app = express();
const port = 5000;

//Importar body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

//importar conexion MongoDB
const archivoBD = require("./connection");

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor");
});

//Importar rutas y modelos
const routeUser = require("./routes/user");
app.use("/api/users", routeUser);

//Configurar server basico
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${port}/`);
});

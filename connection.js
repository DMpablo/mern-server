const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crudmern");

const objetBd = mongoose.connection;

objetBd.on("connected", () => {
  console.log("Conexion correcta a MongoDB");
});
objetBd.on("error", () => {
  console.log("ERROR en Conexion a MongoDB");
});

module.exports = mongoose;

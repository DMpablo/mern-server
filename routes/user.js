const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaUser = new eschema({
  name: String,
  telephone: String,
  email: String,
  idUser: String,
});

const modelUser = mongoose.model("users", eschemaUser);
module.exports = router;

//Agregar nuevo usuario
router.post("/newUser", (req, res) => {
  console.log("nuevo usuario creado");
  const newUser = new modelUser({
    name: req.body.name,
    telephone: req.body.telephone,
    email: req.body.email,
    idUser: req.body.idUser,
  });
  newUser.save((err) => {
    if (!err) {
      res.send("Usuario agregado correctamente");
    } else {
      res.send("ERROR (usuario): ", err);
    }
  });
});

//Obtener lista de usuarios
router.get("/getusers", (req, res) => {
  modelUser.find({}, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

//Obtener data de usuario
router.post("/getuser", (req, res) => {
  modelUser.find({ idUser: req.body.idUser }, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

//Actualizar usuario
router.post("/userupdate", (req, res) => {
  //console.log("usuario :", req.body);
  modelUser.findOneAndUpdate(
    { idUser: req.body.idUser },
    {
      name: req.body.name,
      telephone: req.body.telephone,
      email: req.body.email,
    },
    (err) => {
      if (!err) {
        res.send("Usuario actualizado correctamente 🦸‍♂️👌🏽");
      } else {
        res.send(" Error al actualizar usuario : ❌", err);
      }
    }
  );
});

//Eliminar usuario
router.post("/deleteusuario", (req, res) => {
  modelUser.findOneAndDelete({ idUser: req.body.idUser }, (err) => {
    if (!err) {
      res.send("Usuario eliminado correctamente 🦸‍♂️👌🏽");
    } else {
      res.send(" Error al eliminar usuario : ❌", err);
    }
  });
});

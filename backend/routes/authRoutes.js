const express = require("express");
const router = express.Router()
const crearUsuario = require("../crearUsuario")

const {login} = require("../controllers/authController");

router.post("/login",login)

module.exports = router;

crearUsuario();
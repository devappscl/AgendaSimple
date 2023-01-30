const express = require('express')

const router = express.Router();
const ContactosController = require('../controllers/contactos')

let api_ruta = "/api/v1/"

router.get(`${api_ruta}contactos`,ContactosController.getContactos);
router.get(`${api_ruta}contactos/:id`,ContactosController.getContacto);

module.exports = router;
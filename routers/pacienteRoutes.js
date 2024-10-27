const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");

// Rutas para el CRUD de paciente
router.post("/paciente", pacienteController.crearPaciente);
router.get("/paciente", pacienteController.obtenerPacientes);
router.get("/paciente/:id", pacienteController.obtenerPacientePorId);
router.put("/paciente/:id", pacienteController.actualizarPaciente);
router.delete("/paciente/:id", pacienteController.eliminarPaciente);

//buscar paciente por RUT
router.get("/paciente/rut/:rut", pacienteController.buscarPacientePorRut);

module.exports = router;

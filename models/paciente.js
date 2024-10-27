const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  rut: {
    type: String,
    required: [true, "Rut es requerido"],
  },
  nombre: {
    type: String,
    required: [true, "Nombre es requerido"],
  },
  edad: {
    type: Number,
    required: [true, "Edad es requerida"],
  },
  sexo: {
    type: String,
    required: [true, "Sexo es requerido"],
  },
  fotoPersonal: {
    type: String,
    required: false,
  },
  fechaIngreso: {
    type: Date,
    default: Date.now,
  },
  enfermedad: {
    type: String,
    required: [true, "Enfermedad es requerida"],
  },
  revisado: {
    type: Boolean,
    default: false,
  },
});

const Paciente = mongoose.model("Paciente", pacienteSchema);
module.exports = Paciente;

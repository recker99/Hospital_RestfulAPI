const Paciente = require("../models/paciente");

// Crear un paciente
exports.crearPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.status(201).json(paciente);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los pacientes
exports.obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find({});
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener paciente por ID
exports.obtenerPacientePorId = async (req, res) => {
    try {
        const id = req.params.id.trim();  // Eliminar espacios en blanco
        const paciente = await Paciente.findById(id);
        if (!paciente) {
            return res.status(404).json({ message: `Paciente con ID ${id} no encontrado` });
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un paciente
exports.actualizarPaciente = async (req, res) => {
    try {
        const id = req.params.id.trim();  // Eliminar espacios en blanco o saltos de línea
        const paciente = await Paciente.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        // Verifica si el paciente existe
        if (!paciente) {
            return res.status(404).json({ message: `Paciente con ID ${id} no encontrado` });
        }
        
        res.status(200).json(paciente);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un paciente
exports.eliminarPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.findByIdAndDelete(id);
        if (!paciente) {
            return res.status(404).json({ message: `No se encontró un paciente con ID ${id}` });
        }
        res.status(200).json({ message: 'Paciente eliminado', paciente });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Buscar paciente por RUT
exports.buscarPacientePorRut = async (req, res) => {
    try {
        const rut = req.params.rut.trim(); // Eliminar espacios y saltos de línea
        const paciente = await Paciente.findOne({ rut });

        if (!paciente) {
            return res.status(404).json({ message: `Paciente con RUT ${rut} no encontrado` });
        }

        res.status(200).json(paciente);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

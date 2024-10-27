const express = require("express");
const mongoose = require('mongoose');
const pacienteRoutes = require('./routers/pacienteRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use('/api', pacienteRoutes);

app.get("/", function (req, res) {
  res.send("Prueba");
});



// Conectar a MongoDB
mongoose.
connect("mongodb+srv://ivan:1234@cluster0.fjowi5y.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });


  


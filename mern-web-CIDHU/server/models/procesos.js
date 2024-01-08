const mongoose = require('mongoose');

const ProcesosSchema = mongoose.Schema({
    tipo: String,
    descripcion: String,
    activo: Boolean,
    idDenuncia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Denuncias",
        required: true,
      },
    Fechas: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Fechas",
        }
    ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Procesos', ProcesosSchema);
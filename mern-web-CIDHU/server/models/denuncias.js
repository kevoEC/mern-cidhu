const mongoose = require('mongoose');

const DenunciaSchema = mongoose.Schema({
    caracter: String,
    instancia: String,
    caracterPersonal: Boolean,
    asistencia: Boolean,
    resumenHechos: String,
    nombresResponsables: String,
    activo: Boolean,
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    Procesos: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Procesos",
        }
    ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Denuncia', DenunciaSchema);
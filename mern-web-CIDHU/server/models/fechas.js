const mongoose = require('mongoose');


const FechaSchema = mongoose.Schema({
    fechaInicio: Date,
    fechaFin: Date,
    asunto: String,
    activo: Boolean,
    idProceso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Procesos",
        required: true,
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Fecha', FechaSchema);
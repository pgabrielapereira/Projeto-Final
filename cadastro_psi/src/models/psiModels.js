const mongoose = require("mongoose");

const PsiSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    nome: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefone: {
      type: Number,
      required: true,
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
    },

    atendimento: {
        type: String, 
        required: true,
    },

    bairro: {
      type: String,
      required: true,
    }

    
  });

const Model = mongoose.model("cadastroPsi", PsiSchema);

module.exports = Model;

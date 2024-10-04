import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 50,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Dulce", "Salado", "Agridulce"],
  },
  ingredientes: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 150,
  },
  preparacion: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 500,
  },
});

const Receta = mongoose.model("receta", recetaSchema);
export default Receta;

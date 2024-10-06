import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, leerPrueba, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers.js";


const  router = Router();
router.route("/prueba").get(leerPrueba)
router.route("/recetas").post(crearReceta).get(listarRecetas)
router.route("/recetas/:id").get(obtenerReceta).delete(borrarReceta).put(editarReceta)
export default router;

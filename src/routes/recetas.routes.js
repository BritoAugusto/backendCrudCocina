import { Router } from "express";
import { leerPrueba } from "../controllers/recetas.controllers.js";
const  router = Router();
router.route("/prueba").get(leerPrueba)

export default router;

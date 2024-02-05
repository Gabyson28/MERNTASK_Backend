import express from "express";
import {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  buscarColaborador
} from "../controllers/proyectoController.js";

import checkAuth from "../middleware/chackAuth.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerProyectos)
  .post(checkAuth, nuevoProyecto);

router
  .route("/:id")
  .get(checkAuth, obtenerProyecto)
  .put(checkAuth, editarProyecto)
  .delete(checkAuth, eliminarProyecto);
router.post("/colaboladores", checkAuth, buscarColaborador)
router.post("/colaboladores/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colabolador/:id", checkAuth, eliminarColaborador);

export default router;

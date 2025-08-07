import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil
  , getAllUsers
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/chackAuth.js";

const router = express.Router();
router.post("/", registrar); // crear ususario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.get("/perfil", checkAuth, perfil);
router.get("/", getAllUsers)
export default router;

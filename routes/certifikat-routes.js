import express from "express";
import {
  certifikatDodaj,
  certifikatPoKorisniku,
} from "../controllers/certifikat-controllers.js";
const router = express.Router();
router.post("/dodaj", certifikatDodaj);
router.get("/poKorisniku/:korisnik", certifikatPoKorisniku);
export default router;

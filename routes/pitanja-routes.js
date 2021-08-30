import express from "express";
import {
  pitanjeDodaj,
  pitanjeDohvatiPoTecaju,
  pitanjeIzbrisi,
  pitanjeUredi,
  pitanjeDohvatiPoId
} from "../controllers/pitanja-controllers.js";
const router = express.Router();

router.post("/dodaj", pitanjeDodaj);
router.get("/:id", pitanjeDohvatiPoTecaju);
router.get("/dohvatiPoId/:id", pitanjeDohvatiPoId)
router.delete("/izbrisi", pitanjeIzbrisi);
router.patch("/uredi", pitanjeUredi);

export default router;

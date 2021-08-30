import express from "express";
import {
  lekcijaDodaj,
  lekcijaDohvatiPoTecaju,
  lekcijaIzbrisi,
  lekcijaUredi,
  lekcijaDohvatiPoId,
} from "../controllers/lekcija-controllers.js";

const router = express.Router();

router.post("/dodaj", lekcijaDodaj);
router.get("/:id", lekcijaDohvatiPoTecaju);
router.delete("/izbrisi", lekcijaIzbrisi);
router.patch("/uredi", lekcijaUredi);
router.get("/dohvatiPoId/:id", lekcijaDohvatiPoId);
export default router;

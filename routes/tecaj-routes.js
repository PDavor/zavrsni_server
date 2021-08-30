import express from "express";
import {
  tecajDodaj,
  tecajUredi,
  tecajIzbrisi,
  tecajDohvatiSve,
  tecajDohvatiPoId,
  tecajDodajLekciju,
  tecajDodajPitanje,
} from "../controllers/tecaj-controllers.js";
const router = express.Router();

//admin
router.post("/dodaj", tecajDodaj);
router.patch("/uredi", tecajUredi);
router.delete("/izbrisi", tecajIzbrisi);
router.get("/dohvatiSve", tecajDohvatiSve);
router.get("/dohvatiPoId/:id", tecajDohvatiPoId);
router.patch("/dodajLekciju", tecajDodajLekciju);
router.patch("/dodajPitanje", tecajDodajPitanje);
export default router;

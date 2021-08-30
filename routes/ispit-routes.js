import express from "express";
import {
  ispitDodaj,
  ispitDohvatiNeispravljene,
  ispitDohvatiPoId,
  ispitOcjeni,
} from "../controllers/ispit-controllers.js";
import { rjesenoPitanjeDodaj } from "../controllers/rjesenaPitanja-controllers.js";

const router = express.Router();

router.post("/dodaj", ispitDodaj);
router.post("/dodajRjesenaPitanja", rjesenoPitanjeDodaj);
router.get("/dohvatiNeispravljene/:tecaj", ispitDohvatiNeispravljene);
router.get("/dohvatiPoId/:ispit", ispitDohvatiPoId);
router.patch("/ocjeni", ispitOcjeni); //ispravljen
// router.get("/:id", lekcijaDohvatiPoTecaju);
// router.delete("/izbrisi", lekcijaIzbrisi);
// router.patch("/uredi", lekcijaUredi);
// router.get("/dohvatiPoId/:id", lekcijaDohvatiPoId);
export default router;

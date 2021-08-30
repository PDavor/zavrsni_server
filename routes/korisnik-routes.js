import express from "express";
import {
  korisnikRegistracija,
  korisnikPrijava,
  korisnikPromjeniUlogu,
  korisnikUrediProfil,
  korisnikDodajCertifikat,
  korisnikDohvatiStudente,
  korisnikDodajPredaje,
  korisnikDohvatiProfil,
} from "../controllers/korisnik-controllers.js";
const router = express.Router();

//autentifikacija
router.post("/registracija", korisnikRegistracija);
router.post("/prijava/", korisnikPrijava);

//za profil
router.get("/dohvatiProfil/:korisnik", korisnikDohvatiProfil);

// //za administratora
router.patch("/promjeniUlogu", korisnikPromjeniUlogu);
router.patch("/dodajCertifikat", korisnikDodajCertifikat); //treba testirati jos jer nema kreirane kolekcije tecajevi
router.patch("/dodajPredaje", korisnikDodajPredaje); //treba testirati jos jer nema kreirane kolekcije tecajevi
router.get("/dohvatiStudente", korisnikDohvatiStudente);

// //uređivanje svojeg profila
router.patch("/urediProfil", korisnikUrediProfil);
export default router;

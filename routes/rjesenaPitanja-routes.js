import express from "express";
import {
  rjesenoPitanjeDodaj,
  rjesenoPitanjePoIspitu,
  rjesenoPitanjeUrediBodove,
} from "../controllers/rjesenaPitanja-controllers.js";
const router = express.Router();

router.post("/dodaj", rjesenoPitanjeDodaj);
router.patch("/urediBodove", rjesenoPitanjeUrediBodove);
router.get("/dohvatiPoIspitu/:ispit", rjesenoPitanjePoIspitu);
export default router;

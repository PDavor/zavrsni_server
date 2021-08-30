import mongoose from "mongoose";

const tecajSchema = mongoose.Schema({
  naziv: { type: String, unique: true, required: true },
  opis: { type: String, required: true },
  lekcije: [{ type: mongoose.Types.ObjectId, required: true, ref: "Lekcija" }], //array id-ova lekcija vk
  pitanja: [{ type: mongoose.Types.ObjectId, required: true, ref: "Pitanje" }], //array id-ova pitanja vk
  predavac: { type: mongoose.Types.ObjectId, required: true, ref: "Korisnik" },
});

const Tecaj = mongoose.model("Tecaj", tecajSchema, "Tecaj");
export default Tecaj;

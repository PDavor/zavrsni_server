import mongoose from "mongoose";

const korisnikSchema = mongoose.Schema({
  korisnickoIme: { type: String, unique: true, required: true },
  ime: { type: String, required: true },
  prezime: { type: String, required: true },
  email: { type: String },
  lozinka: { type: String, required: true },
  uloga: {
    type: String,
    enum: ["student", "predavac", "administrator"],
    default: "student",
  },
  predaje: { type: mongoose.Types.ObjectId, ref: "Tecaj" },
});

const Korisnik = mongoose.model("Korisnik", korisnikSchema, "Korisnik");
export default Korisnik;

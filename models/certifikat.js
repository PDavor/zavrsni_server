import mongoose from "mongoose";

const certifikatSchema = mongoose.Schema({
  tecajId: { type: mongoose.Types.ObjectId, required: true, ref: "Tecaj" }, //id od tecaja
  korisnikId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Korisnik",
  },
  naziv: { type: String, required: true },
  slika: { type: String },
});

const Certifikat = mongoose.model("Certifikat", certifikatSchema, "Certifikat");
export default Certifikat;

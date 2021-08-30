import mongoose from "mongoose";

const rjesenaPitanjaSchema = mongoose.Schema({
  idPitanja: { type: mongoose.Types.ObjectId, required: true, ref: "Pitanje" },
  idIspit: { type: mongoose.Types.ObjectId, required: true, ref: "Ispit" },
  naziv: { type: String, required: true },
  odgovori: { type: Array },
  maksBodova: { type: Number },
  tip: {
    type: String,
    enum: ["jedanTocan", "viseTocnih", "esejsko", "dopuni", "tocnoNetocno"],
  },
  student: { type: mongoose.Types.ObjectId, required: true, ref: "Korisnik" }, //id studenta
  tecaj: { type: mongoose.Types.ObjectId, required: true, ref: "Tecaj" }, //id od tecaja
  ostvareniBodovi: { type: Number },
});

const ispitSchema = mongoose.Schema({
  student: { type: mongoose.Types.ObjectId, required: true, ref: "Korisnik" }, //id studenta
  tecaj: { type: mongoose.Types.ObjectId, required: true, ref: "Tecaj" }, //id od tecaja
  ukupnoBodova: { type: Number },
  ostvarenoBodova: { type: Number },
  status: {
    type: String,
    enum: ["zaIspraviti", "polozen", "nePolozen"],
    default: "zaIspraviti",
  },
});
export const RjesenaPitanja = mongoose.model(
  "RjesenaPitanja",
  rjesenaPitanjaSchema,
  "RjesenaPitanja"
);
export const Ispit = mongoose.model("Ispit", ispitSchema, "Ispit");

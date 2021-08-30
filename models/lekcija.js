import mongoose from "mongoose";

const lekcijaSchema = mongoose.Schema({
  naziv: { type: String, required: true },
  sadrzaj: { type: String },
  tecaj: { type: mongoose.Types.ObjectId, required: true, ref: "Tecaj" }, //id od tecaja
});

const Lekcija = mongoose.model("Lekcija", lekcijaSchema, "Lekcija");
export default Lekcija;

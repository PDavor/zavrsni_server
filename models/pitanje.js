import mongoose from "mongoose";

const pitanjeSchema = mongoose.Schema({
  naziv: { type: String, required: true },
  odgovori: { type: Array },
  tecaj: { type: mongoose.Types.ObjectId, required: true, ref: "Tecaj" }, //id od tecaja
  maksBodova: { type: Number, required: true },
  tip: {
    type: String,
    enum: ["jedanTocan", "viseTocnih", "esejsko", "dopuni", "tocnoNetocno"],
    required: true,
  },
});

const Pitanje = mongoose.model("Pitanje", pitanjeSchema, "Pitanje");
export default Pitanje;

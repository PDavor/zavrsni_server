import Lekcija from "../models/lekcija.js";

export const lekcijaDodaj = async (req, res) => {
  try {
    let lekcija = req.body;
    let novaLekcija = new Lekcija(lekcija);
    await novaLekcija.save();
    res.status(200).json(novaLekcija);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const lekcijaUredi = async (req, res) => {
  try {
    let update = {};
    const { _id, naziv, sadrzaj } = req.body;
    if (naziv) {
      update["naziv"] = naziv;
    }
    if (sadrzaj) {
      update["sadrzaj"] = sadrzaj;
    }

    const lekcija = await Lekcija.findByIdAndUpdate({ _id }, { $set: update });
    res.status(200).json(lekcija);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const lekcijaDohvatiPoTecaju = async (req, res) => {
  const { id } = req.params;
  try {
    const lekcija = await Lekcija.find({ tecaj: id });
    res.status(200).json(lekcija);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const lekcijaIzbrisi = async (req, res) => {
  try {
    const { _id } = req.body;
    const lekcija = await Lekcija.findOneAndDelete({ _id });
    res.status(200).json(lekcija);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const lekcijaDohvatiPoId = async (req, res) => {
  try {
    const lekcija = await Lekcija.findById(req.params.id);
    res.status(200).json(lekcija);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

import Pitanje from "../models/pitanje.js";

export const pitanjeDodaj = async (req, res) => {
  try {
    let pitanje = req.body;
    let novoPitanje = new Pitanje(pitanje);
    await novoPitanje.save();
    res.status(200).json(novoPitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const pitanjeUredi = async (req, res) => {
  try {
    const { _id, naziv, maksBodova, odgovori, tocanOdgovor, tip } = req.body;
    let update = {};
    if (naziv) {
      update["naziv"] = naziv;
    }
    if (maksBodova) {
      update["maksBodova"] = maksBodova;
    }
    if (odgovori) {
      update["odgovori"] = odgovori;
    }
    if (tip) {
      update["tip"] = tip;
    }
    const pitanje = await Pitanje.findOneAndUpdate({ _id }, { $set: update });
    res.status(200).json(pitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const pitanjeDohvatiPoTecaju = async (req, res) => {
  const { id } = req.params;
  try {
    const pitanje = await Pitanje.find({ tecaj: id });
    res.status(200).json(pitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const pitanjeIzbrisi = async (req, res) => {
  try {
    const { _id } = req.body;
    const pitanje = await Pitanje.findOneAndDelete({ _id });
    res.status(200).json(pitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const pitanjeDohvatiPoId = async (req, res) => {
  try {
    const pitanje = await Pitanje.findById(req.params.id);
    res.status(200).json(pitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};
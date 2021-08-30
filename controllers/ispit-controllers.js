import { Ispit } from "../models/ispit.js";

export const ispitDodaj = async (req, res) => {
  try {
    let ispit = req.body;
    let noviIspit = new Ispit(ispit);
    await noviIspit.save();
    res.status(200).json(noviIspit);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitDodajPitanja = async (req, res) => {
  try {
    const { _id, rjesenaPitanja } = req.body;
    const pitanja = await Ispit.findOneAndUpdate(
      { _id },
      { $push: { pitanja: rjesenaPitanja } }
    );
    res.status(200).json(pitanja);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitUrediBodove = async (req, res) => {
  try {
    const { _id, ukupnoBodova, ostvarenoBodova } = req.body;
    const bodovi = await Ispit.findOneAndUpdate(
      { _id },
      { ukupnoBodova, ostvarenoBodova }
    );
    res.status(200).json(bodovi);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitPolozen = async (req, res) => {
  try {
    const { _id, polozen } = req.body;
    const ocjeni = await Ispit.findOneAndUpdate({ _id }, { polozen });
    res.status(200).json(ocjeni);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitDohvatiNeispravljene = async (req, res) => {
  try {
    const ispit = await Ispit.find({
      tecaj: req.params.tecaj,
      status: "zaIspraviti",
    });
    res.status(200).json(ispit);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitDohvatiPoId = async (req, res) => {
  try {
    const ispit = await Ispit.findById(req.params.ispit);
    res.status(200).json(ispit);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const ispitOcjeni = async (req, res) => {
  try {
    let update = {};
    const { _id, ukupnoBodova, ostvarenoBodova, status } = req.body;
    if (ukupnoBodova) {
      update["ukupnoBodova"] = ukupnoBodova;
    }
    if (ostvarenoBodova) {
      update["ostvarenoBodova"] = ostvarenoBodova;
    }

    if (status) {
      update["status"] = status;
    }

    const ispit = await Ispit.findByIdAndUpdate({ _id }, { $set: update });
    res.status(200).json(ispit);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

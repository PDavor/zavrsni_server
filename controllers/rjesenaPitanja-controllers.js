import { RjesenaPitanja } from "../models/ispit.js";

export const rjesenoPitanjeDodaj = async (req, res) => {
  try {
    let pitanje = req.body;
    let novoPitanje = RjesenaPitanja.insertMany(pitanje);
    res.status(200).json(novoPitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const rjesenoPitanjeUrediBodove = async (req, res) => {
  try {
    //dosta je prosljediti samo _id
    const { _id, ostvareniBodovi } = req.body;
    const bodovi = await RjesenaPitanja.findOneAndUpdate(
      { _id: _id },
      {
        ostvareniBodovi,
      }
    );
    res.status(200).json(bodovi);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const rjesenoPitanjePoIspitu = async (req, res) => {
  try {
    const pitanje = await RjesenaPitanja.find({
      idIspit: req.params.ispit,
    });
    res.status(200).json(pitanje);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

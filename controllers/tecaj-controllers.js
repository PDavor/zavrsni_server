import Tecaj from "../models/tecaj.js";

export const tecajDodaj = async (req, res) => {
  try {
    let tecaj = req.body;
    let noviTecaj = new Tecaj(tecaj);
    await noviTecaj.save();
    res.status(200).json(noviTecaj);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajUredi = async (req, res) => {
  try {
    const { _id, naziv, opis, predavac, certifikatSlika } = req.body;
    let update = {};
    if (naziv) {
      update["naziv"] = naziv;
    }
    if (opis) {
      update["opis"] = opis;
    }
    if (predavac) {
      update["predavac"] = predavac;
    }
    if (certifikatSlika) {
      update["certifikatSlika"] = certifikatSlika;
    }
    const tecaj = await Tecaj.findOneAndUpdate(
      { _id },
      {
        $set: update,
      }
    );
    res.status(200).json(tecaj);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajIzbrisi = async (req, res) => {
  try {
    const { _id } = req.body;
    const tecaj = await Tecaj.findOneAndDelete({ _id: _id });
    res.status(200).json(tecaj);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajDohvatiSve = async (req, res) => {
  try {
    const tecaj = await Tecaj.find();
    res.status(200).json(tecaj);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajDohvatiPoId = async (req, res) => {
  try {
    const tecaj = await Tecaj.findById(req.params.id);
    res.status(200).json(tecaj);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajDodajLekciju = async (req, res) => {
  try {
    const { _id, lekcija } = req.body;
    const mod = await Tecaj.findOneAndUpdate(
      { _id },
      {
        $push: { lekcije: lekcija },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const tecajDodajPitanje = async (req, res) => {
  try {
    const { _id, pitanje } = req.body;
    const mod = await Tecaj.findOneAndUpdate(
      { _id },
      {
        $push: {
          pitanja: [pitanje],
        },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

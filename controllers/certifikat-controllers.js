import Certifikat from "../models/certifikat.js";

export const certifikatDodaj = async (req, res) => {
  try {
    let certifikat = req.body;
    let noviCertifikat = new Certifikat(certifikat);
    await noviCertifikat.save();
    res.status(200).json(noviCertifikat);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const certifikatPoKorisniku = async (req, res) => {
  try {
    const certifikat = await Certifikat.find({
      korisnikId: req.params.korisnik,
    });

    res.status(200).json(certifikat);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

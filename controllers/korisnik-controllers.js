import Korisnik from "../models/korisnik.js";

export const korisnikRegistracija = async (req, res) => {
  try {
    //novi korisnik ce se nalaziti u body od requesta
    let korisnik = req.body;
    //kreiraj novog korisnika na temelju modela kategorije
    let noviKorisnik = new Korisnik(korisnik);
    //kreiranje
    await noviKorisnik.save();
    //vraca ok 200 i vraca kategoriju isto (response)
    res.status(200).json(noviKorisnik);
  } catch (error) {
    //409 konflikt
    res.status(409).json({ greška: error.message });
  }
};

export const korisnikPrijava = async (req, res) => {
  const { korisnickoIme, lozinka } = req.body;
  try {
    const korisnik = await Korisnik.findOne({
      korisnickoIme,
      lozinka,
    });
    res.status(200).json(korisnik);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};
//koristi se kod kreiranja tecaja
export const korisnikPromjeniUlogu = async (req, res) => {
  try {
    //dosta je prosljediti samo _id
    const { _id } = req.body;
    const mod = await Korisnik.findOneAndUpdate(
      { _id: _id },
      {
        uloga: "predavac",
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};
// korisnik ureduje svoj profil
export const korisnikUrediProfil = async (req, res) => {
  try {
    const { _id, ime, prezime, email, lozinka, slika } = req.body;
    const update = {};
    if (ime) {
      update["ime"] = ime;
    }
    if (prezime) {
      update["prezime"] = prezime;
    }
    if (email) {
      update["email"] = email;
    }
    if (lozinka) {
      update["lozinka"] = lozinka;
    }
    if (slika) {
      update["slika"] = slika;
    }
    const mod = await Korisnik.findOneAndUpdate(
      { _id: _id },
      {
        $set: update,
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};
//koristi se kad je ispit polozen
export const korisnikDodajCertifikat = async (req, res) => {
  try {
    const { _id, tecaj } = req.body;
    const mod = await Korisnik.findOneAndUpdate(
      { _id },
      {
        $push: {
          certifikati: [{ tecaj }],
        },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};
//koristi se kod dodavanja tecaja
export const korisnikDodajPredaje = async (req, res) => {
  try {
    const { _id, predaje } = req.body;
    const mod = await Korisnik.findOneAndUpdate(
      { _id },
      {
        $set: {
          predaje,
          uloga: "predavac",
        },
      }
    );
    res.status(200).json(mod);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const korisnikDohvatiStudente = async (req, res) => {
  try {
    const korisnici = await Korisnik.find({ uloga: "student" });
    res.status(200).json(korisnici);
  } catch (error) {
    res.status(409).json({ greška: error.message });
  }
};

export const korisnikDohvatiProfil = async (req, res) => {
  try {
    const korisnik = await Korisnik.findOne({
      _id: req.params.korisnik,
    });

    res.status(200).json(korisnik);
  } catch (error) {
    res.status(404).json({ greška: error.message });
  }
};

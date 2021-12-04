import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import korisnikRoutes from "./routes/korisnik-routes.js";
import tecajRoutes from "./routes/tecaj-routes.js";
import lekcijaRoutes from "./routes/lekcija-routes.js";
import pitanjeRoutes from "./routes/pitanja-routes.js";
import rjesenaPitanja from "./routes/rjesenaPitanja-routes.js";
import ispitRoutes from "./routes/ispit-routes.js";
import certifikatRoutes from "./routes/certifikat-routes.js";
const app = express(); //app, pokretanje express-a
app.use(cors());
app.use(express.json());
//novi routeovi
app.use("/korisnik", korisnikRoutes);
app.use("/tecaj", tecajRoutes);
app.use("/lekcija", lekcijaRoutes);
app.use("/pitanje", pitanjeRoutes);
app.use("/rjesenoPitanje", rjesenaPitanja);
app.use("/ispit", ispitRoutes);
app.use("/certifikat", certifikatRoutes);

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI || CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server pokrenut na portu: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);

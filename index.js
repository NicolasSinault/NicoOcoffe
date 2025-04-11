import express from "express";
import path from "node:path";
import { router } from "./app/router/router.js";
import dotenv from "dotenv";
const port = 3000;

dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("views",path.join(import.meta.dirname, "app", "views") );

app.use(express.static(path.join(import.meta.dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
app.use(router);






// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).render('erreur404');
 
});


// Middleware pour gérer les autres erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('erreur500', { error: err.message });
});







app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });


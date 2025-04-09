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
app.use(express.urlencoded({ extended: true }));
app.use(router);


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });


// app.listen(process.env.port, () => {
//     console.log(`Example app listening on port ${process.env.port}`);});
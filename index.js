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



app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });


// import express from "express";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import { router } from "./app/router/router.js";
// import dotenv from "dotenv";

// // Configuration
// const port = 3000;
// dotenv.config();

// // Résolution du chemin
// const __filename = fileURLToPath(import.meta.url); // Chemin absolu du fichier actuel
// const __dirname = path.dirname(__filename); // Répertoire courant

// const app = express();
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "app", "views"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(router);

// // Démarrer le serveur
// app.listen(port, () => {
//     console.log(`Serveur en écoute sur http://localhost:${port}`);
// });

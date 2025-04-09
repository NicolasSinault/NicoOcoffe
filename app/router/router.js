import express from "express";
import * as GeneralController from "../folderControllers/GeneralController.js"



export const router = express.Router();

// TODO vos routes
// router.get("/", (req, res) => {
//     res.send("Hello World!");
// });

router.get("/",GeneralController.pageAccueil);

router.get("/catalogue/",GeneralController.pageCatalogue);

router.get("/produit/",GeneralController.pageProduit);

router.get("/erreur404",GeneralController.pageErreur);

// router.use((req, res) => {  ça ca fout la merde ca empeche les images de s'afficher
//     res.status(404).send("Sorry can't find that!");
// });


//exporte le routeur par defaut
export default router;
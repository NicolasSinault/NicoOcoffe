import express from "express";
import * as GeneralController from "../folderControllers/GeneralController.js"



export const router = express.Router();

// TODO vos routes
// router.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// 
router.get("/",GeneralController.list);

router.get("/accueil/",GeneralController.list);

//*router.get("/",GeneralController.pageAccueil);
// affiche bien l'ensemble de la base dans le console.log terminal 

router.get("/catalogue/",GeneralController.pageCatalogue);
//*router.get("/catalogue/",GeneralController.list);

router.get("/produit/",GeneralController.pageProduit);

router.get("/erreur404",GeneralController.pageErreur);

// router.use((req, res) => {  ça ca fout la merde ca empeche les images de s'afficher
//     res.status(404).send("Sorry can't find that!");
// });


//exporte le routeur par defaut
export default router;
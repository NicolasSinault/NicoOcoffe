import express from "express";
import * as GeneralController from "../folderControllers/GeneralController.js"



export const router = express.Router();

// TODO vos routes

router.get("/",GeneralController.list);
router.get("/accueil/",GeneralController.list);
router.get("/catalogue/",GeneralController.list2);
router.get("/catalogueTotal/",GeneralController.list3);
router.get("/produit/:id",GeneralController.showProduct);
router.get("/erreur404",GeneralController.pageErreur);
router.get("/rgpd",GeneralController.rgpd);

//exporte le routeur par defaut
export default router;
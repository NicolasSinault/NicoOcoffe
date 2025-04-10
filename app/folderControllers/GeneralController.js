import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';
// recupere les infos de datamapper.js
import * as GeneralDataMapper from "../folderDataMappers/GeneralDatamapper.js"

export const list = async (req, res) => {
    try {

        const cafes = await GeneralDataMapper.find3last();
           // une fonction de controller render la vue et passe les données pour que la vue les utilise
           //console.log("Données récupérées depuis la BDD :", cafes);
           //console.log(cafes)
           res.render("accueil",{cafes});
        
    } catch (error) {
        res.status(500).send("Erreur lors de l'appel à la bdd");
    }
};



export const list2 = async (req, res) => {
    try {

        const threeFirst = await GeneralDataMapper.find3First();
           // une fonction de controller render la vue et passe les données pour que la vue les utilise
           //console.log("Données récupérées depuis la BDD :", cafes);

           //console.log(allCafes)  ok bon retour des infos
           res.render("catalogue",{threeFirst});
        
    } catch (error) {
        res.status(500).send("Erreur lors de l'appel à la bdd");
    }
};



export const list3 = async (req, res) => {
    try {

        const allCafes = await GeneralDataMapper.findAll();
           // une fonction de controller render la vue et passe les données pour que la vue les utilise
           console.log("Données récupérées depuis la BDD :", allCafes);

           //console.log(allCafes)  ok bon retour des infos
           res.render("catalogueTotal",{allCafes});
        
    } catch (error) {
        res.status(500).send("Erreur lors de l'appel à la bdd");
    }
};



export const showProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Récupérer l'ID depuis l'URL
        const product = await GeneralDataMapper.findById(productId); // Méthode pour récupérer un produit par son ID

        if (!product) {
            return res.status(404).send("Produit non trouvé");
        }

        res.render("produit", { product }); // Passer les détails du produit à la vue
    } catch (error) {
        console.error("Erreur lors de la récupération des détails du produit :", error);
        res.status(500).send("Erreur lors de l'appel à la bdd");
    }
};




export const pageAccueil=(req,res)=>{
    res.render("accueil");
}


export const pageCatalogue=(req,res)=>{
    res.render("catalogue");
}

export const pageCatalogueTotal=(req,res)=>{
    res.render("catalogueTotal");
}



export const pageProduit=(req,res)=>{
    res.render("produit");
}


export const pageErreur=(req,res)=>{
    res.render("erreur404");
}



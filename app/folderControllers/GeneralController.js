import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';
// recupere les infos de datamapper.js
import * as GeneralDataMapper from "../folderDataMappers/GeneralDatamapper.js"


export const rgpd = (req, res) => {
    try {
        res.render('rgpd');
    } catch (error) {
        console.error('Erreur lors du chargement de la page RGPD:', error);
        res.status(500).render('erreur500', { error: error.message });
    }
};


export const list = async (req, res) => {
    try {

        const cafes = await GeneralDataMapper.find3last();
           // une fonction de controller render la vue et passe les données pour que la vue les utilise
           //console.log("Données récupérées depuis la BDD :", cafes);
           //console.log(cafes)
           res.render("accueil",{cafes});
        
    } catch (error) {
        console.error('Erreur lors du chargement de la page accueil:', error);
        res.status(500).render('erreur500', { error: error.message });
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
        console.error('Erreur lors du chargement de la page catalogue:', error);
        res.status(500).render('erreur500', { error: error.message });
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
        console.error('Erreur lors du chargement de la page catalogue total:', error);
        res.status(500).render('erreur500', { error: error.message });
    }
};



export const showProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Récupérer l'ID depuis l'URL
           // Test erreur 500
        if (productId === '9999') {
            throw new Error('Test erreur 500 : Simulation d\'un problème serveur');
        }
        const product = await GeneralDataMapper.findById(productId); // Méthode pour récupérer un produit par son ID

        if (!product) {
            return res.status(404).render('erreur404');
        }

        res.render("produit", { product }); // Passer les détails du produit à la vue
    } catch (error) {
        console.error("Erreur lors de la récupération des détails du produit :", error);
        res.status(500).render('erreur500', { error: error.message });
    }
};






export const pageErreur=(req,res)=>{
    res.render("erreur404");
}


export const pageErreur500=(req,res)=>{
    res.render("erreur500", { error: null });
}

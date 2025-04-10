import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';
// recupere les infos de datamapper.js
import * as GeneralDataMapper from "../folderDataMappers/GeneralDatamapper.js"

export const list = async (req, res) => {
    try {

        const cafes = await GeneralDataMapper.find3last();
           // une fonction de controller render la vue et passe les données pour que la vue les utilise
           //console.log("Données récupérées depuis la BDD :", cafes);
           console.log(cafes)
           res.render("accueil",{cafes});
        
    } catch (error) {
        res.status(500).send("Erreur lors de l'appel à la bdd");
    }
};


export const pageAccueil=(req,res)=>{
    res.render("accueil");
}


export const pageCatalogue=(req,res)=>{
    res.render("catalogue");
}


export const pageProduit=(req,res)=>{
    res.render("produit");
}


export const pageErreur=(req,res)=>{
    res.render("erreur404");
}



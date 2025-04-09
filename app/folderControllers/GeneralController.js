import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';
// recupere les infos de datamapper.js
import * as GeneralDataMapper from "../folderDataMappers/GeneralDatamapper.js"


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

import { pgPool } from '../../config/pgPool.js';
//import dotenv from 'dotenv';

export const find3First = async () => {
    try {
        const { rows : firstCafes } = await pgPool.query("SELECT * FROM cafe  LIMIT 3");
        //console.log("resultat",cafes);
        return firstCafes;
    } catch (error) {
        throw error;
    }
};
// recupere les 3 derniers éléments pour l'affichage dans la page accueil
export const find3last = async () => {
    try {
        // etant donné qu'on veut juste récupérer la propriété rows de l'objet Result généré par pgPool.query, cette syntaxe permet de créer une variable en partant de la propriété rows
        // destructuring d'objet
        const { rows : cafes } = await pgPool.query("SELECT * FROM cafe ORDER BY id DESC LIMIT 3");
        console.log("resultat",cafes);
        return cafes;
    } catch (error) {
        throw error;
    }
};

// recupere l'ensemble des cafes
export const findAll = async () => {
    try {
        const { rows : allCafes } = await pgPool.query("SELECT * FROM cafe");
        //console.log("resultat",cafes);
        return allCafes;
    } catch (error) {
        throw error;
    }
};

// recupere les id
export const findById = async (id) => {
    try {
        // Utilisation d'une requête SQL pour sélectionner un produit par son ID
        const query = "SELECT * FROM cafe WHERE id = $1";
        const values = [id]; // Utilisation de paramètres pour éviter les injections SQL

        const { rows } = await pgPool.query(query, values);

        // Retourne le premier élément du résultat, car l'ID est unique
        return rows[0];
    } catch (error) {
        throw error;
    }
};


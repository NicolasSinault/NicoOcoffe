import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';

// //pgPool.query('SELECT type FROM cafe WHERE id = 16;', (err, res) => {
// pgPool.query('SELECT * FROM cafe', (err, res) => {
//     if (err) {
//         console.error('Erreur lors de l\'exécution de la requête', err);
//     } else {
//          console.log('Résultats :', res.rows);
//     }
//     // pgPool.end();
//  });
export const find3First = async () => {
    try {
        // etant donné qu'on veut juste récupérer la propriété rows de l'objet Result généré par pgPool.query, cette syntaxe permet de créer une variable en partant de la propriété rows
        // destructuring d'objet
        //const { rows : cafes } = await pgPool.query("SELECT * FROM cafe");
        //const { rows : allCafes } = await pgPool.query("SELECT * FROM cafe");
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
        //const { rows : cafes } = await pgPool.query("SELECT * FROM cafe");
        const { rows : cafes } = await pgPool.query("SELECT * FROM cafe ORDER BY id DESC LIMIT 3");
        //console.log("resultat",cafes);
        return cafes;
    } catch (error) {
        throw error;
    }
};

// recupere les 3 derniers éléments pour l'affichage dans la page accueil
export const findAll = async () => {
    try {
        // etant donné qu'on veut juste récupérer la propriété rows de l'objet Result généré par pgPool.query, cette syntaxe permet de créer une variable en partant de la propriété rows
        // destructuring d'objet
        //const { rows : cafes } = await pgPool.query("SELECT * FROM cafe");
        const { rows : allCafes } = await pgPool.query("SELECT * FROM cafe");
        //console.log("resultat",cafes);
        return allCafes;
    } catch (error) {
        throw error;
    }
};



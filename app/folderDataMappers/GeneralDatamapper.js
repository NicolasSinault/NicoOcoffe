import { pgPool } from '../../config/pgPool.js';
import dotenv from 'dotenv';
//pgPool.query('SELECT type FROM cafe WHERE id = 16;', (err, res) => {
pgPool.query('SELECT * FROM cafe', (err, res) => {
    if (err) {
        console.error('Erreur lors de l\'exécution de la requête', err);
    } else {
         console.log('Résultats :', res.rows);
    }
    // pgPool.end();
 });
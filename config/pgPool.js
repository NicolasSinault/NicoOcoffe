// import pg from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// const { Pool } = pg;

// export const pgPool = new Pool();

//
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

let pool;

if (process.env.DATABASE_URL) {
  // En production, avec une DATABASE_URL (ex: Render, ..)
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  // En local, avec les variables individuelles
  pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    // ssl: { rejectUnauthorized: false }, // Ajouter ici si SSL en local
  });
}

// export default pool;
// PORT=3000
// PGUSER=nico
// PGPASSWORD=nico
// PGDATABASE=ocoffee


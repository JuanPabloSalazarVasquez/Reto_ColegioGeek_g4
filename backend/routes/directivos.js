const { Router } = require('express'); 
const directivo = Router();
const { pool } = require('../db/db');


// Peticion get para consultar los datos de un directivo
// /directivo
// Esta peticion funciona correctamente
directivo.get("/directivos-inicio-directivo/:id_directivo", async (req, res) => {
    let client = await pool.connect();
    const { id_directivo } = req.params;
    try {
      const result = await client.query(
        `SELECT directivo.id_directivo, nombres, apellidos, foto_perfil
        FROM directivo
        INNER JOIN persona
        ON directivo.id_persona = persona.id_persona AND id_directivo = ${id_directivo};`
      );
      if (result.rows) {
        res.json(result.rows);
      } else {
        res.json({});
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  });
  // Fin peticion get






module.exports = directivo;
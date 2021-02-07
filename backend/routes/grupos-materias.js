const { Router } = require("express");
const grupos_materias = Router();
const { pool } = require("../db/db");


// DIRECTIVOS

// Peticion get para traer todas las materias que se dan en un grupo
// /directivos/grupos_VerEstudiantes
// Esta peticion funciona
grupos_materias.get("/directivos-materias-grupo/:id_grupo", async (req, res) => {
  let client = await pool.connect();
  const { id_grupo } = req.params;
  try {
    const result = await client.query(
      `SELECT nombre_materia, codigo_materia
      FROM materias
      INNER JOIN grupos_materias 
      ON materias.id_materia = grupos_materias.id_materia AND grupos_materias.id_grupo = ${id_grupo} 
      ;`
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

// FIN DIRECTIVOS

module.exports = grupos_materias;

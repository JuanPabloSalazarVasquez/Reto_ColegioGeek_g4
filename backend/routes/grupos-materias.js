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

// Peticion post para crear un nuevo registro en la tabla de grupos_materias
// /Directivos/Registro_Grupos
// Esta peticion funciona
grupos_materias.post('/nuevo-registro-grupos-materias', async (req, res) => {
  let client = await pool.connect();
  const {
    id_materia,
    id_grupo,
    id_maestro
  } = req.body
  console.log(id_materia)
  console.log(id_grupo)
  console.log(id_maestro)
  try {
      const result = await client.query(`INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), ${id_materia}, ${id_grupo}, ${id_maestro});`)
      if (result) {
        res.json({message: 'Se agrego una nueva materia a un grupo.'});
      } else {
        res.json({message: 'No agrego una nueva materia a un grupo.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
})
// Fin peticion post


// FIN DIRECTIVOS

module.exports = grupos_materias;

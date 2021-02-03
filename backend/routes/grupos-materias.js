const { Router } = require("express");
const grupos_materias = Router();
const { pool } = require("../db/db");

// Peticion get para traer todos los grupos en los que da clase un profesor respecto al id_maestro
// Se hace la consulta a la tabla grupos-materias y se hace un inner join con grupos y grupos-estudiantes
// /maestros/registrar_notas
// Esta peticion funciona
grupos_materias.get("/grupos-clase-maestro", async (req, res) => {
  let client = await pool.connect();
  const { id_maestro } = req.body;
  try {
    const result = await client.query(
      `SELECT codigo_grupo, grado_grupo, nombres, apellidos
        FROM grupos_materias
        INNER JOIN grupos 
        ON grupos_materias.id_grupo = grupos.id_grupo AND id_maestro = ${id_maestro}
        INNER JOIN maestros
        ON grupos.director_id_maestro = maestros.id_maestro
        INNER JOIN persona
        ON maestros.id_persona = persona.id_persona
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

module.exports = grupos_materias;

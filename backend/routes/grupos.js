const { Router } = require('express'); 
const grupos = Router();
const { pool } = require('../db/db');


// Peticion post para crear un nuevo grupo en la parte de directivos
// /Directivos/Registro_Grupos
// Esta peticion se realiza a la tabla de grupos para crear un nuevo grupo
// Esta peticion funciona
grupos.post('/directivos-nuevo-grupo/:id_directivo', async(req,res)=>{
    let client = await pool.connect();
  const {
    director_id_maestro,
    codigo_grupo,
    joranada_grupo,
    grado_grupo,
    year_grupo
  } = req.body
  try {
      const result = await client.query(`INSERT INTO grupos VALUES (NEXTVAL ('grupos_seq'), ${director_id_maestro}, '${codigo_grupo}', '${joranada_grupo}', '${grado_grupo}', '${year_grupo}');`)
      if (result) {
        res.json({message: 'Se creo un nuevo grupo.'});
      } else {
        res.json({message: 'No se creo un nuevo grupo.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
});
// Fin post


// Peticion get para mostrar todos los grupos y la cantidad de estudiantes por cada uno
// /Directivos/Registro_Grupos
// Esta peticion se realiza a la tabla de grupos-estudiantes y se cuentan los estudiantes por cada grupo
// trayendo, ademas, los datos de cada grupo
// Esta peticion funciona
grupos.get("/directivos-ver-grupos/:id_directivo", async (req, res) => {
    let client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT grupos.id_grupo, estado, codigo_grupo, grado_grupo, director_id_maestro, nombres, apellidos , COUNT(grupos.id_grupo) AS cantidad_estudiantes
        FROM grupos
        INNER JOIN maestro
        ON grupos.director_id_maestro = maestros.id_maestro
        INNER JOIN persona
        ON maestro.id_persona = persona.id_persona
        INNER JOIN grupos_estudiantes
        ON grupos_estudiantes.id_grupo = grupos.id_grupo AND grupos_estudiantes.estado = 'En curso'
        GROUP BY grupos.id_grupo, estado, codigo_grupo, grado_grupo, director_id_maestro, nombres, apellidos
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
// Fin get








module.exports = grupos;

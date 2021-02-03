const { Router } = require('express'); 
const materias = Router();
const { pool } = require('../db/db');


// Peticion get para mostrar todos los maestros con las materias que enseñan y si son o no directores de grupo
// /Directivos/Registro_Materias
// Esta es una peticion que se realiza a la tabla de maestros donde consultamos todos los maestros,
// con las materias que enseñan y si son o no directores de algun grupo
// Esta peticion funciona
materias.get("/directivos-ver-all-materias", async (req, res) => {
    let client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT codigo_materia, nombre_materia, sexto, septimo, octavo, noveno, decimo, once
        FROM materias;`
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


// PETICIONES PARA CREAR UN NUEVO MAESTRO

// Peticion post para crear un registro en la tabla de personas y ala vez en la tabla de maestros
/// /Directivos/Registro_Materias
// Esta peticion funciona
materias.post('/directivos-nuevo-materia', async(req,res)=>{
    let client = await pool.connect();
  const {
    nombre_materia,
    codigo_materia,
    sexto,
    septimo,
    octavo,
    noveno,
    decimo,
    once
  } = req.body;
  try {
      const result = await client.query(`INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), '${nombre_materia}', '${codigo_materia}', '${sexto}', '${septimo}', '${octavo}', '${noveno}', '${decimo}', '${once}');`)
      if (result.rows) {
          res.json({message: 'Se crea una nueva materia.'})
      } else {
        res.json({message: 'No se creo una nueva materia.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor." })
  }
});
// Fin peticion post para crear una nueva persona y maestro

// FIN PETICIONES PARA CREAR UN NUEVO MAESTRO



module.exports = materias;

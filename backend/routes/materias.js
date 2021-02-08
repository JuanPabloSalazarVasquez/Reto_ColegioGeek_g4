const { Router } = require('express'); 
const materias = Router();
const { pool } = require('../db/db');


// Peticion get para mostrar todos las materias que se encuentran registradas
// /Directivos/Registro_Materias
// Esta peticion funciona
materias.get("/directivos-ver-all-materias", async (req, res) => {
    let client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT materias.id_materia ,codigo_materia, nombre_materia, sexto, septimo, octavo, noveno, decimo, once
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


// PETICIONES PARA CREAR UNA NUEVA MATERIA

// Peticion post para crear un registro en la tabla de materias
/// /Directivos/Registro_Materias
// Esta peticion funciona
materias.post('/directivos-nueva-materia-crear-materia', async (req,res)=>{
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
  console.log(nombre_materia, codigo_materia, sexto, septimo, octavo, noveno, decimo, once)
  try {
      const result = await client.query(`INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), '${nombre_materia}', '${codigo_materia}', '${sexto}', '${septimo}', '${octavo}', '${noveno}', '${decimo}', '${once}');`)
      if (result) {
          res.json({message: 'Se crea una nueva materia.'})
      } else {
        res.json({message: 'No se creo una nueva materia.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor." })
  }
});
// Fin peticion post para crear una nueva persona y maestro

// FIN PETICIONES PARA CREAR UNA NUEVA MATERIA



module.exports = materias;

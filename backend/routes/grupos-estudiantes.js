const { Router } = require('express'); 
const grupos_estudiantes = Router();
const { pool } = require('../db/db');


// Peticion get para traer todos lo grupos cursados de un estudiante segun el estado y el id_estudiante
// Faltan organizar
// /estudiantes/grupo_cursados
// Esta peticion necesita id_estudiante
grupos_estudiantes.get("/materias-estudiante", async (req, res) => {
    let client = await pool.connect();
    const id_estudiante = req.body;
    try {
      const result = await client.query(
        `SELECT * FROM consolidados WHERE id_estudiante = ${id_estudiante}`,
        []
      );
      if (result) {
        res.json(result[0]);
      } else {
        res.json({});
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  });
// Fin peticion get 


// Peticion get para traer todos lo estudiantes que hacen parte de un grupo
// /maestros/registrar_notas/grupo_estudiantes
// Faltan organizar
grupos_estudiantes.get("/materias-estudiante", async (req, res) => {
    let client = await pool.connect();
    const id_estudiante = req.body;
    try {
      const result = await client.query(
        `SELECT * FROM consolidados WHERE id_estudiante = ${id_estudiante}`,
        []
      );
      if (result) {
        res.json(result[0]);
      } else {
        res.json({});
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  });
// Fin peticion get 


// Peticion get para traer todos los estudiantes que hacen parte de un grupo
// /directivos/grupos_VerEstudiantes
// Faltan organizar
// Esta peticion requiere de id_grupo
grupos_estudiantes.get("/materias-estudiante", async (req, res) => {
    let client = await pool.connect();
    const id_estudiante = req.body;
    try {
      const result = await client.query(
        `SELECT * FROM consolidados WHERE id_estudiante = ${id_estudiante}`,
        []
      );
      if (result) {
        res.json(result[0]);
      } else {
        res.json({});
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  });
// Fin peticion get 













// PETICIONES SEGUNDARIAS

// Crear un nuevo registro en la tabla notas
grupos_estudiantes.post('/nueva-nota', (req,res)=>{
    const { id_materia,id_grupo,id_estudiante,nota,tipo_nota } = req.body;
    const notas = [ id_materia,id_grupo,id_estudiante,nota,tipo_nota ];

    const nuevaNotas = `INSERT INTO notas(id_materia,id_grupo,id_estudiante,nota,tipo_nota) VALUES (?,?,?,?,?)`;

    pool.query(nuevaNotas, notas, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nueva nota`});
        }
    });
});
// Fin crear un nuevo registro en la tabla notas

// Consultar todas la notas de la tabla notas
grupos_estudiantes.get('/all-notas', (req,res)=>{
    pool.query('SELECT * FROM notas', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas la notas de la tabla notas


module.exports = grupos_estudiantes;
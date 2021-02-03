const { Router } = require('express'); 
const grupos_estudiantes = Router();
const { pool } = require('../db/db');


// Peticion get para traer todos lo grupos cursados de un estudiante segun el estado y el id_estudiante
// /estudiantes/grupo_cursados
// Esta peticion necesita id_estudiante
// Esta peticion funciona
grupos_estudiantes.get("/grupos-cursados", async (req, res) => {
    let client = await pool.connect();
    const { id_estudiante } = req.body;
    try {
      const result = await client.query(
        `SELECT codigo_grupo, grado_grupo, director_id_maestro, year_grupo
        FROM grupos_estudiantes
        INNER JOIN grupos 
        ON grupos_estudiantes.id_grupo = grupos.id_grupo AND id_estudiante = ${id_estudiante} AND estado = 'Aprobado' OR estado = 'Reprobado';`,
        []
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


// Peticion get para traer todos lo estudiantes que hacen parte de un grupo
// /maestros/registrar_notas/grupo_estudiantes
// Esta peticion necesita id_grupo
// Esta peticion funciona
grupos_estudiantes.get("/estudiantes-grupo-notas", async (req, res) => {
    let client = await pool.connect();
    const { id_grupo } = req.body;
    try {
      const result = await client.query(
        `SELECT codigo_estudiante, nombres, apellidos
        FROM grupos_estudiantes
        INNER JOIN estudiante
        ON grupos_estudiantes.id_estudiante = estudiante.id_estudiante AND id_grupo = ${id_grupo} AND estado = 'En curso'
        INNER JOIN persona
        ON estudiante.id_persona = persona.id_persona;`
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


// Peticion get para traer todos los estudiantes que hacen parte de un grupo
// /directivos/grupos_VerEstudiantes
// Esta peticion requiere de id_grupo
// Esta peticion funciona
grupos_estudiantes.get("/estudiantes-ver-grupos-directivos", async (req, res) => {
    let client = await pool.connect();
    const { id_grupo } = req.body;
    try {
      const result = await client.query(
        `SELECT codigo_estudiante, nombres, apellidos
        FROM grupos_estudiantes
        INNER JOIN estudiante
        ON grupos_estudiantes.id_estudiante = estudiante.id_estudiante AND id_grupo = ${id_grupo} AND estado = 'En curso'
        INNER JOIN persona
        ON estudiante.id_persona = persona.id_persona;`,
        []
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






module.exports = grupos_estudiantes;
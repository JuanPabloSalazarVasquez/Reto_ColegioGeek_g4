const { Router } = require('express'); 
const grupos_estudiantes = Router();
const { pool } = require('../db/db');


// ESTUDIANTES

// Peticion get para traer todos lo grupos cursados de un estudiante segun el estado y el id_estudiante
// /estudiantes/grupo_cursados
// Esta peticion necesita id_estudiante
// Esta peticion funciona
grupos_estudiantes.get("/grupos-cursados/:id_estudiante", async (req, res) => {
    let client = await pool.connect();
    const { id_estudiante } = req.params;
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

// FIN ESTUDIANTES

// MAESTROS

// Peticion get para traer todos lo estudiantes que hacen parte de un grupo
// /maestros/registrar_notas/grupo_estudiantes
// Esta peticion necesita id_grupo
// Esta peticion funciona
grupos_estudiantes.get("/estudiantes-grupo-notas-ver-all-estudiantes/:id_grupo", async (req, res) => {
    let client = await pool.connect();
    const { id_grupo } = req.params;
    try {
      const result = await client.query(
        `SELECT estudiante.id_estudiante, codigo_estudiante, nombres, apellidos
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

// Peticion get para traer todos los grupos en los que da clase un profesor
// /maestros/registrar_notas
// Esta peticion necesita id_maestro
// Esta peticion funciona
grupos_estudiantes.get("/estudiantes-grupo-notas-ver-clases-grupos/:id_maestro", async (req, res) => {
  let client = await pool.connect();
  const { id_maestro } = req.params;
  try {
    const result = await client.query(
      `SELECT materias.id_materia, grupos.id_grupo, codigo_grupo, grado_grupo, nombres, apellidos, nombre_materia
      FROM grupos_materias
      INNER JOIN grupos 
      ON grupos_materias.id_grupo = grupos.id_grupo AND id_maestro = ${id_maestro}
      INNER JOIN maestro
      ON grupos.director_id_maestro = maestro.id_maestro
      INNER JOIN persona
      ON maestro.id_persona = persona.id_persona
      INNER JOIN materias
      ON grupos_materias.id_materia = materias.id_materia
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

// Peticion get para traer todos los grupos en los que da clase un profesor
// /maestros/estudiantes_grupos
// Esta peticion necesita id_maestro
// Esta peticion funciona
grupos_estudiantes.get("/maestros-ver-grupos/:id_maestro", async (req, res) => {
  let client = await pool.connect();
  const { id_maestro } = req.params;
  try {
    const result = await client.query(
      `SELECT grupos.id_grupo, codigo_grupo, grado_grupo, nombres, apellidos, nombre_materia
      FROM grupos_materias
      INNER JOIN grupos 
      ON grupos_materias.id_grupo = grupos.id_grupo AND id_maestro = ${id_maestro}
      INNER JOIN maestro
      ON grupos.director_id_maestro = maestro.id_maestro
      INNER JOIN persona
      ON maestro.id_persona = persona.id_persona
      INNER JOIN materias
      ON grupos_materias.id_materia = materias.id_materia
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

// Peticion get para traer todos lo estudiantes que hacen parte de un grupo
// /maestros/estudiantes_grupos/ver_estudiantes
// Esta peticion necesita id_grupo
// Esta peticion funciona
grupos_estudiantes.get("/maestros-ver-estudiantes-grupo/:id_grupo", async (req, res) => {
  let client = await pool.connect();
  const { id_grupo } = req.params;
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

// FIN MAESTROS

//DIRECTIVOS

// Peticion get para traer todos los estudiantes que hacen parte de un grupo
// /directivos/grupos_VerEstudiantes
// Esta peticion requiere de id_grupo
// Esta peticion funciona
grupos_estudiantes.get("/estudiantes-ver-grupos-estudiantes-directivos/:id_directivo", async (req, res) => {
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

// FIN DIRECTIVOS




module.exports = grupos_estudiantes;
const { Router } = require("express");
const notas = Router();
const { pool } = require("../db/db");


// ESTUDIANTES

// Peticion get para traer todas las materias en las que se encuentra registrado un estudiante
// /estudiantes/mis_notas
// Esta peticion necesita el id_estudiante
// Esta peticion funciona
notas.get("/materias-estudiante", async (req, res) => {
  let client = await pool.connect();
  const { id_estudiante } = req.body;
  try {
    const result = await client.query(
      `SELECT materias.id_materia, codigo_materia,nombre_materia,grado_grupo, nombres, apellidos
      FROM notas
      INNER JOIN materias 
      ON notas.id_materia = materias.id_materia AND notas.id_estudiante = ${id_estudiante}
      INNER JOIN grupos
      ON notas.id_grupo = grupos.id_grupo
      INNER JOIN grupos_materias
      ON notas.id_materia = grupos_materias.id_materia AND notas.id_grupo = grupos_materias.id_grupo
      INNER JOIN maestros
      ON grupos_materias.id_maestro = maestros.id_maestro
      INNER JOIN persona
      ON maestros.id_persona = persona.id_persona;`
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

// Peticion get para traer todas las notas de un estudiante respecto a una materia y un id_estudiante
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// /estudiantes/mis_notas/ver_notas
// Esta peticion funciona
notas.get("/estudiante-ver-notas-materia-estudiante", async (req, res) => {
  let client = await pool.connect();
  const {
    id_estudiante,
    id_materia
  } = req.body;
  try {
    const result = await client.query(
      `SELECT codigo_estudiante, nombres, apellidos, tipo_nota, nota
      FROM notas 
      INNER JOIN estudiante 
      ON notas.id_estudiante = estudiante.id_estudiante AND notas.id_materia = ${id_materia} AND notas.id_estudiante = ${id_estudiante}
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

// FIN ESTUDIANTES


// MAESTROS

// Peticion get para traer todas las notas de un estudiante respecto a una materia y un id_estudiante
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// Esta peticion necesita el id_materia y el id_estudiante
// Esta peticion funciona
notas.get("/notas-materia-estudiante", async (req, res) => {
  let client = await pool.connect();
  const {
    id_estudiante,
    id_materia
  } = req.body;
  try {
    const result = await client.query(
      `SELECT codigo_estudiante, nombres, apellidos, tipo_nota, nota
      FROM notas 
      INNER JOIN estudiante 
      ON notas.id_estudiante = estudiante.id_estudiante AND notas.id_materia = ${id_materia} AND notas.id_estudiante = ${id_estudiante}
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


// Peticion post para crear una nueva nota en la tabla de notas
// Falta comprobar
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// El post se hace respecto a id_estudiante, id_materia y id_grupo
notas.post("/nueva-nota-estudiante", async(req, res) => {
  let client = await pool.connect();
  const { 
  id_materia,
  id_grupo,
  id_estudiante,
  nota,
  tipo_nota
} = req.body;
  const notas = [id_materia, id_grupo, id_estudiante, nota, tipo_nota];

  const nuevaNotas = `INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), ${id_materia}, ${id_grupo}, ${id_estudiante}, ${nota}, ${tipo_nota})`;

  await client.query(nuevaNotas, notas, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: `se creo una nueva nota` });
    }
  });
});
// Fin peticion post

// FIN MAESTROS




module.exports = notas;

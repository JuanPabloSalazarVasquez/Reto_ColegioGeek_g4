const { Router } = require("express");
const notas = Router();
const { pool } = require("../db/db");


// Peticion get para traer todas las materias en las que se encuentra registrado un estudiante
// Faltan organizar
// /estudiantes/mis_notas
// Esta peticion necesita el id_estudiante
notas.get("/materias-estudiante", async (req, res) => {
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


// Peticion get para traer todas las notas de un estudiante segun el id_materia y el id_estudiante
// Faltan organizar
// /maestros/registrar_notas/grupo_estudiantes
// Esta peticion necesita del id_materia y id_estudiante
notas.get("/materias-estudiante", async (req, res) => {
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


// Peticion get para traer todas las notas de un estudiante respecto a una materia y un id_estudiante
// Faltan organizar
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// Esta peticion necesita el id_materia y el id_estudiante
notas.get("/materias-estudiante", async (req, res) => {
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


// Peticion post para crear una nueva nota en la tabla de notas
// Faltan organizar
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// El post se hace respecto a id_estudiante y id_materia
notas.post("/nueva-nota", (req, res) => {
  const { id_materia, id_grupo, id_estudiante, nota, tipo_nota } = req.body;
  const notas = [id_materia, id_grupo, id_estudiante, nota, tipo_nota];

  const nuevaNotas = `INSERT INTO notas(id_materia,id_grupo,id_estudiante,nota,tipo_nota) VALUES (?,?,?,?,?)`;

  pool.query(nuevaNotas, notas, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: `se creo una nueva nota` });
    }
  });
});
// Fin peticion post













// PETICIONES SEGUNDARIAS

// Crear un nuevo registro en la tabla notas
notas.post("/nueva-nota", (req, res) => {
  const { id_materia, id_grupo, id_estudiante, nota, tipo_nota } = req.body;
  const notas = [id_materia, id_grupo, id_estudiante, nota, tipo_nota];

  const nuevaNotas = `INSERT INTO notas(id_materia,id_grupo,id_estudiante,nota,tipo_nota) VALUES (?,?,?,?,?)`;

  pool.query(nuevaNotas, notas, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: `se creo una nueva nota` });
    }
  });
});
// Fin crear un nuevo registro en la tabla notas

// Consultar todas la notas de la tabla notas
notas.get("/all-notas", (req, res) => {
  pool.query("SELECT * FROM notas", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});
// Fin consultar todas la notas de la tabla notas

//
notas.put("/nota/:id_nota", (req, res) => {
  const { id_materia, id_grupo, id_estudiante, nota, tipo_nota } = req.body;
  const { id_nota } = req.params;

  pool.query(
    "UPDATE nota SET id_materia=?,id_grupo=?,id_estudiante=?,nota=?,tipo_nota=? WHERE id_nota=?",
    [id_nota, id_materia, id_grupo, id_estudiante, nota, tipo_nota],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});
//
module.exports = notas;

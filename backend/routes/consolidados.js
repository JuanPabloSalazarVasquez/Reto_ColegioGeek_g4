const { Router } = require("express");
const consolidados = Router();
const { pool } = require("../db/db");


// Peticion get para consultar todos los consolidados de un estudiante
// Faltan organizar
// /estudiantes/mis_consolidados
// Esta peticion necesita el id_estudiante
consolidados.get("/consolidados-estudiante", async (req, res) => {
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
// Fin peticion get para consultar todos los consolidados de un estudiante








// PETICIONES SEGUNDARIAS

// Crear un nuevo registro en la tabla notas
consolidados.post("/nuevo-consolidado", async (req, res) => {
  let client = await pool.connect();
  const { id_materia, id_grupo, id_estudiante, nota, tipo_nota } = req.body;
  const notas = [id_materia, id_grupo, id_estudiante, nota, tipo_nota];

  const nuevaNotas = `INSERT INTO notas(id_materia,id_grupo,id_estudiante,nota,tipo_nota) VALUES (?,?,?,?,?)`;

  pool.query(nuevaNotas, notas, (err, results, fields) => {
    client.release(true);
    if (err) {
      return console.error(err.message);
    } else {
      res.json({ message: `se creo una nueva nota` });
    }
  });
});
// Fin crear un nuevo registro en la tabla notas

module.exports = consolidados;

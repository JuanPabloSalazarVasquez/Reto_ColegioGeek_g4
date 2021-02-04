const { Router } = require("express");
const consolidados = Router();
const { pool } = require("../db/db");


// Peticion get para consultar todos los consolidados de un estudiante
// /estudiantes/mis_consolidados
// Esta peticion necesita el id_estudiante
// Esta peticion funciona
consolidados.get("/consolidados-estudiante/:id_estudiante", async (req, res) => {
  let client = await pool.connect();
  const { id_estudiante } = req.params;
  try {
    const result = await client.query(
      `SELECT * FROM consolidados WHERE id_estudiante = ${id_estudiante}`
    );
    if (result) {
      res.json(result.rows);
    } else {
      res.json({});
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
});
// Fin peticion get para consultar todos los consolidados de un estudiante






module.exports = consolidados;

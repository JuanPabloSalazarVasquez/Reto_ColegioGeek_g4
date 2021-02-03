const { Router } = require('express'); 
const estudiantes = Router();
const { pool } = require('../db/db');


// Peticion get para consultar todos los estudiantes mostrandonos algunos datos del mismo
// /Directivos/Registro_Estudiantes
// Esta peticion funciona correctamente
estudiantes.get("/directivos-all-estudiantes", async (req, res) => {
    let client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT codigo_estudiante, nombres, apellidos, grado_grupo, codigo_grupo, year_grupo
        FROM estudiante
        INNER JOIN grupos_estudiantes 
        ON grupos_estudiantes.id_estudiante = estudiante.id_estudiante
        INNER JOIN persona
        ON estudiante.id_persona = persona.id_persona
        INNER JOIN grupos
        ON grupos_estudiantes.id_grupo = grupos.id_grupo AND grupos_estudiantes.estado = 'En curso';`
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


// PETICIONES PARA CREAR UN NUEVO ESTUDIANTE
// Peticion post para crear un nuevo estudiante

// Fin peticion post crear estudiante
// /Directivos/Registro_Estudiantes
estudiantes.post('/directivos-nuevo-estudiante', async(req,res)=>{
    let client = await pool.connect();
  const {
    id_persona,
    codigo_estudiante,
    estado_estudiante
  } = req.body
  try {
      const result = await client.query(`INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), ${id_persona}, '${codigo_estudiante}', '${estado_estudiante}');`)
      if (result) {
        res.json({message: 'Se creo un nuevo estudiante.'});
      } else {
        res.json({message: 'No se creo un nuevo estudiante.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
});

// Peticion post para crear un registro en la tabla de personas\
/// Directivos/Registro_Estudiantes
estudiantes.post('/directivos-nuevo-estudiante-persona', async(req,res)=>{
    let client = await pool.connect();
  const {
    nombres,
    apellidos,
    tipo_documento,
    numero_documento,
    sexo,
    fecha_nacimiento,
    direccion_residencial,
    ciudad_residencial,
    telefono_residencial,
    telefono_celular,
    correo_electronico,
    estado_cuenta,
    foto_perfil,
    pdf_documento,
    tipo_usuario
  } = req.body
  try {
      const result = await client.query(`INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Miguel Angel', 'Milan Justo', 'Tarjeta de identidad', '6782377707', 'Hombre', '2003-02-25', '19302 McGlynn Mill', 'Medellín', '7726499731', '672090393', 'ifivesom-9896@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'Estudiante');`)
      if (result) {
        res.json({message: 'Se creo una nueva persona.'});
      } else {
        res.json({message: 'No se creo una nueva persona '});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
});
// Fin peticion post para crear una nueva persona

// FIN PETICIONES PARA CREAR UN NUEVO ESTUDIANTE

module.exports = estudiantes;
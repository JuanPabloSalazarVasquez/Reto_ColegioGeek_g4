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

// Peticion post para crear un registro en la tabla de personas y ala vez en la tabla de estudiantes
/// Directivos/Registro_Estudiantes
// Esta peticion funciona
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
    tipo_usuario,
    codigo_estudiante,
    estado_estudiante
  } = req.body;
  try {
      const result = await client.query(`INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), '${nombres}', '${apellidos}', '${tipo_documento}', '${numero_documento}', '${sexo}', '${fecha_nacimiento}', '${direccion_residencial}', '${ciudad_residencial}', '${telefono_residencial}', '${telefono_celular}', '${correo_electronico}', '${estado_cuenta}', '${foto_perfil}', '${pdf_documento}', '${tipo_usuario}') RETURNING id_persona;`)
      if (result.rows) {
          console.log(result.rows[0].id_persona);
       const result2 = await client.query(`INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), ${result.rows[0].id_persona}, '${codigo_estudiante}', '${estado_estudiante}');`);
       if(result2){
           res.json({message: 'Se creo un nuevo estudiante.'});
       }else{
           res.json({message: "No se ha creado un nuevo estudiante."});
       }
      } else {
        res.json({message: 'No se creo una nueva persona'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
});
// Fin peticion post para crear una nueva persona y estudiante

// FIN PETICIONES PARA CREAR UN NUEVO ESTUDIANTE

module.exports = estudiantes;
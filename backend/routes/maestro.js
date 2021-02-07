const { Router } = require('express'); 
const maestro = Router();
const { pool } = require('../db/db');


// Peticion get para consultar los datos de un maestro
// /maestros
// Esta peticion funciona correctamente
maestro.get("/maestros-inicio-maestro/:id_maestro", async (req, res) => {
  let client = await pool.connect();
  const { id_maestro } = req.params;
  try {
    const result = await client.query(
      `SELECT maestro.id_maestro, nombres, apellidos, foto_perfil
      FROM maestro
      INNER JOIN persona
      ON maestro.id_persona = persona.id_persona AND id_maestro = ${id_maestro};`
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

// Peticion get para mostrar todos los maestros con las materias que enseñan y si son o no directores de grupo
// /Directivos/Registro_Maestros
// Esta es una peticion que se realiza a la tabla de maestros donde consultamos todos los maestros,
// con las materias que enseñan y si son o no directores de algun grupo
// Esta peticion funciona
maestro.get("/directivos-ver-maestros-materias-directores", async (req, res) => {
    let client = await pool.connect();
    try {
      const result = await client.query(
        `SELECT maestro.id_maestro, numero_documento, nombres, apellidos, codigo_materia, codigo_grupo
        FROM maestro
        LEFT JOIN grupos_materias
        ON grupos_materias.id_maestro = maestro.id_maestro
        LEFT JOIN materias
        ON grupos_materias.id_materia = materias.id_materia
        LEFT JOIN grupos
        ON grupos.director_id_maestro = maestro.id_maestro
        INNER JOIN persona
        ON maestro.id_persona = persona.id_persona
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
// Fin get


// PETICIONES PARA CREAR UN NUEVO MAESTRO

// Peticion post para crear un registro en la tabla de personas y ala vez en la tabla de maestros
/// /Directivos/Registro_Maestros
// Esta peticion funciona
maestro.post('/directivos-nuevo-maestro-persona/:id_directivo', async(req,res)=>{
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
    codigo_maestro
  } = req.body;
  try {
      const result = await client.query(`INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), '${nombres}', '${apellidos}', '${tipo_documento}', '${numero_documento}', '${sexo}', '${fecha_nacimiento}', '${direccion_residencial}', '${ciudad_residencial}', '${telefono_residencial}', '${telefono_celular}', '${correo_electronico}', '${estado_cuenta}', '${foto_perfil}', '${pdf_documento}', '${tipo_usuario}') RETURNING id_persona;`)
      if (result.rows) {
          console.log(result.rows[0].id_persona);
       const result2 = await client.query(`INSERT INTO maestro VALUES (NEXTVAL ('maestros_seq'), ${result.rows[0].id_persona}, '${codigo_maestro}');`);
       if(result2){
           res.json({message: 'Se creo un nuevo maestro.'});
       }else{
           res.json({message: "No se ha creado un nuevo maestro."});
       }
      } else {
        res.json({message: 'No se creo una nueva persona.'});
      }
  } catch (e) {
      res.status(500).json({ errorCode: e.errno, message: "Error en el servidor." })
  }
});
// Fin peticion post para crear una nueva persona y maestro

// FIN PETICIONES PARA CREAR UN NUEVO MAESTRO


module.exports = maestro;

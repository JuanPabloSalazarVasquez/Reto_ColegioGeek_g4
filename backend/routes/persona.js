const { Router } = require('express'); 
const persona = Router();
const pool = require('../db/db');

// Crear un nuevo registro en la tabla personas
// Falta configurar como se enviran foto_perfil y pdf_documento
persona.post('/nueva-persona', (req,res)=>{
    const { nombres,apellidos,tipo_documento,numero_documento,sexo,fecha_nacimiento,direccion_residencial,ciudad_residencial,tipo_usuario,telefono_residencial,telefono_celular,correo_electronico,estado_cuenta,foto_perfil,pdf_documento } = req.body;
    const persona = [ nombres,apellidos,tipo_documento,numero_documento,sexo,fecha_nacimiento,direccion_residencial,ciudad_residencial,tipo_usuario,telefono_residencial,telefono_celular,correo_electronico,estado_cuenta,foto_perfil,pdf_documento ];

    const nuevaPersona = `INSERT INTO persona(nombres,apellidos,tipo_documento,numero_documento,sexo,fecha_nacimiento,direccion_residencial,ciudad_residencial,tipo_usuario,telefono_residencial,telefono_celular,correo_electronico,estado_cuenta,foto_perfil,pdf_documento) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    pool.query(nuevaPersona, persona, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `nueva persona agregada`});
        }
    });
});
// Fin crear un nuevo registro en la tabla personas

// Consultar todas las personas de la tabla personas
persona.get('/all-personas', (req,res)=>{
    pool.query('SELECT * FROM persona', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas las personas de la tabla personas

//
persona.put('/persona/:id_persona', (req,res)=>{
    const { nombres,apellidos,tipo_documento,numero_documento,sexo,fecha_nacimiento,direccion_residencial,ciudad_residencial,tipo_usuario,telefono_residencial,telefono_celular,correo_electronico,estado_cuenta,foto_perfil,pdf_documento } = req.body;
    const {id_persona} =req.params;

    pool.query('UPDATE persona SET nombres=?,apellidos=?,tipo_documento=?,numero_documento=?,sexo=?,fecha_nacimiento=?,direccion_residencial=?,ciudad_residencial=?,tipo_usuario=?,telefono_residencial=?,telefono_celular=?,correo_electronico=?,estado_cuenta=?,foto_perfil=?,pdf_documento=? WHERE id_persona=?',
    [nombres,apellidos,tipo_documento,numero_documento,sexo,fecha_nacimiento,direccion_residencial,ciudad_residencial,tipo_usuario,telefono_residencial,telefono_celular,correo_electronico,estado_cuenta,foto_perfil,pdf_documento,id_persona], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//
module.exports = persona;

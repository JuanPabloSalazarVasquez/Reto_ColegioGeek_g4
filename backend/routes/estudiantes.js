const { Router } = require('express'); 
const estudiantes = Router();
const {pool} = require('../db/db');

// Crear un nuevo registro en la tabla estudiantes
estudiantes.post('/nuevo-estudiante', (req,res)=>{
    const { id_persona,id_grupo,grado,codigo_estudiante } = req.body;
    const estudiante = [ id_persona,id_grupo,grado,codigo_estudiante ];

    const nuevoEstudiante = `INSERT INTO estudiante(id_persona,id_grupo,grado,codigo_estudiante) VALUES (?,?,?,?)`;

    pool.query(nuevoEstudiante, estudiante, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo un nuevo estudiante`});
        }
    });
});
// Fin crear un nuevo registro en la tabla estudiante

// Consultar todos los estudiantes de la tabla estudiante
estudiantes.get('/all-estudiantes', (req,res)=>{
    pool.query('SELECT * FROM estudiante', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los estudiantes de la tabla estudiante

//Actualizar un estudiante por su id
estudiantes.put('/estudiante/:id_estudiante', (req,res)=>{
    const { id_persona,id_grupo,grado,codigo_estudiante } = req.body;
    const {id_estudiante} =req.params;

    pool.query('UPDATE estudiante SET id_persona=?,id_grupo=?,grado=?,codigo_estudiante=? WHERE id_estudiante=?',
    [id_persona,id_grupo,grado,codigo_estudiante,id_estudiante], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin actualizar un estudiante por su id

//Eliminar un estudiante por su id


//Fin eliminar un estudiante por su id




module.exports = estudiantes;

const { Router } = require('express'); 
const estudiantes = Router();
const pool = require('./db/db');

// Crear un nuevo registro en la tabla estudiantes
// Falta configurar mysqlConnection
estudiantes.post('/nuevo-estudiante', (req,res)=>{
    const { id_persona,id_grupo,grado,codigo_estudiante } = req.body;
    const estudiante = [ id_persona,id_grupo,grado,codigo_estudiante ];

    const nuevoEstudiante = `INSERT INTO estudiante(id_persona,id_grupo,grado,codigo_estudiante) VALUES (?,?,?,?)`;

    mysqlConnection.query(nuevoEstudiante, estudiante, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo un nuevo estudiante`});
        }
    });
});
// Fin crear un nuevo registro en la tabla estudiante

// Consultar todos los estudiantes de la tabla estudiante
// Falta configurar mysqlConnection
estudiantes.get('/all-estudiantes', (req,res)=>{
    mysqlConnection.query('SELECT * FROM estudiante', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los estudiantes de la tabla estudiante

module.exports = estudiantes;
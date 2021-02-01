const { Router } = require('express'); 
const grupos_materias = Router();
const pool = require('./db/db');

// Crear un nuevo registro en la tabla notas
grupos_materias.post('/nueva-nota', (req,res)=>{
    const { id_materia,id_grupo,id_estudiante,nota,tipo_nota } = req.body;
    const notas = [ id_materia,id_grupo,id_estudiante,nota,tipo_nota ];

    const nuevaNotas = `INSERT INTO notas(id_materia,id_grupo,id_estudiante,nota,tipo_nota) VALUES (?,?,?,?,?)`;

    pool.query(nuevaNotas, notas, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nueva nota`});
        }
    });
});
// Fin crear un nuevo registro en la tabla notas

// Consultar todas la notas de la tabla notas
grupos_materias.get('/all-notas', (req,res)=>{
    pool.query('SELECT * FROM notas', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas la notas de la tabla notas


module.exports = grupos_materias;
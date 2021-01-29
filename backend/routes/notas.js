const { Router } = require('express'); 
const notas = Router();
const pool = require('../db/db');

// Crear un nuevo registro en la tabla notas
notas.post('/nueva-nota', (req,res)=>{
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
notas.get('/all-notas', (req,res)=>{
    pool.query('SELECT * FROM notas', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas la notas de la tabla notas

//
notas.put('/nota/:id_nota', (req,res)=>{
    const { id_materia,id_grupo,id_estudiante,nota,tipo_nota } = req.body;
    const {id_nota} =req.params;

    pool.query('UPDATE nota SET id_materia=?,id_grupo=?,id_estudiante=?,nota=?,tipo_nota=? WHERE id_nota=?',
    [id_nota, id_materia,id_grupo,id_estudiante,nota,tipo_nota], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//
module.exports = notas;

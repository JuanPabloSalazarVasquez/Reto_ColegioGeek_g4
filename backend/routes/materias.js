const { Router } = require('express'); 
const materias = Router();
const pool = require('./db/db');

// Crear un nuevo registro en la tabla materias
materias.post('/nueva-materia', (req,res)=>{
    const { id_grupo,id_maestro,nombre_materia,codigo_materia } = req.body;
    const materia = [ id_grupo,id_maestro,nombre_materia,codigo_materia ];

    const nuevaMateria = `INSERT INTO materias(id_grupo,id_maestro,nombre_materia,codigo_materia) VALUES (?,?,?,?)`;

    pool.query(nuevaMateria, materia, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nueva materia`});
        }
    });
});
// Fin crear un nuevo registro en la tabla materias

// Consultar todas las materias de la tabla materias
materias.get('/all-materias', (req,res)=>{
    pool.query('SELECT * FROM materias', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas las materias de la tabla materias


module.exports = materias;
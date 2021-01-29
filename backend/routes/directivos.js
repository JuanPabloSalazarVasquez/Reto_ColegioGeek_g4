const { Router } = require('express'); 
const directivo = Router();
const pool = require('../db/db');

// Crear un nuevo registro en la tabla directivos
directivo.post('/nuevo-directivo', (req,res)=>{
    const { id_persona,cargo_directivo } = req.body;
    const directivo = [ id_persona,cargo_directivo ];

    const nuevoDirectivo = `INSERT INTO directivos(id_persona,cargo_directivo) VALUES (?,?)`;

    pool.query(nuevoDirectivo, directivo, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nuevo directivo`});
        }
    });
});
// Fin crear un nuevo registro en la tabla directivo

// Consultar todos los directivos
directivo.get('/all-directivos', (req,res)=>{
    pool.query('SELECT * FROM directivos', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los directivos



module.exports = directivo;
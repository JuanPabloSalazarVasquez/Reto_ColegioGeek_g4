const { Router } = require('express'); 
const directivo = Router();

// Crear un nuevo registro en la tabla directivos
// Falta configurar mysqlConnection
directivos.post('/nuevo-directivo', (req,res)=>{
    const { id_persona,cargo_directivo } = req.body;
    const directivo = [ id_persona,cargo_directivo ];

    const nuevoDirectivo = `INSERT INTO directivos(id_persona,cargo_directivo) VALUES (?,?)`;

    mysqlConnection.query(nuevoDirectivo, directivo, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nuevo directivo`});
        }
    });
});
// Fin crear un nuevo registro en la tabla directivo

// Consultar todos los directivos
// Falta configurar mysqlConnection
directivos.get('/all-directivos', (req,res)=>{
    mysqlConnection.query('SELECT * FROM directivos', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los directivos

module.exports = directivo;
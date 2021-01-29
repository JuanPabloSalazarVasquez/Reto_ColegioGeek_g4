const { Router } = require('express'); 
const maestro = Router();

// Crear un nuevo registro en la tabla maestro
// Falta configurar mysqlConnection
maestro.post('/nuevo-maestro', (req,res)=>{
    const { id_persona,codigo_maestro } = req.body;
    const maestro = [ id_persona,codigo_maestro ];

    const nuevoMaestro = `INSERT INTO maestro(id_persona,codigo_maestro) VALUES (?,?)`;

    mysqlConnection.query(nuevoMaestro, maestro, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nuevo maestro`});
        }
    });
});
// Fin crear un nuevo registro en la tabla maestro

// Consultar todos los maestros de la tabla maestros
// Falta configurar mysqlConnection
maestro.get('/all-maestros', (req,res)=>{
    mysqlConnection.query('SELECT * FROM maestro', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los maestros de la tabla maestros


module.exports = maestro;
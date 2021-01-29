const { Router } = require('express'); 
const materias = Router();

// Crear un nuevo registro en la tabla materias
// Falta configurar mysqlConnection
materias.post('/nueva-materia', (req,res)=>{
    const { id_grupo,id_maestro,nombre_materia,codigo_materia } = req.body;
    const materia = [ id_grupo,id_maestro,nombre_materia,codigo_materia ];

    const nuevaMateria = `INSERT INTO materias(id_grupo,id_maestro,nombre_materia,codigo_materia) VALUES (?,?,?,?)`;

    mysqlConnection.query(nuevaMateria, materia, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nueva materia`});
        }
    });
});
// Fin crear un nuevo registro en la tabla materias

// Consultar todas las materias de la tabla materias
// Falta configurar mysqlConnection
materias.get('/all-materias', (req,res)=>{
    mysqlConnection.query('SELECT * FROM materias', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todas las materias de la tabla materias


module.exports = materias;
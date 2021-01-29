const { Router } = require('express'); 
const grupos = Router();
const pool = require('./db/db');

// Crear un nuevo registro en la tabla grupos
// Falta configurar mysqlConnection
grupos.post('/nuevo-grupo', (req,res)=>{
    const { director_grupo,jornada_grupo,grado_grupo,year_grupo,estado } = req.body;
    const grupo = [ director_grupo,jornada_grupo,grado_grupo,year_grupo,estado ];

    const nuevoGrupo = `INSERT INTO grupos(director_grupo,jornada_grupo,grado_grupo,year_grupo,estado) VALUES (?,?,?,?,?)`;

    mysqlConnection.query(nuevoGrupo, grupo, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nuevo grupo`});
        }
    });
});
// Fin crear un nuevo registro en la tabla grupo

// Consultar todos los registros de la tabla grupos
// Falta configurar mysqlConnection
grupos.get('/all-grupos', (req,res)=>{
    mysqlConnection.query('SELECT * FROM grupos', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin consultar todos los registros de la tabla grupos


module.exports = grupos;
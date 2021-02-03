const { Router } = require('express'); 
const grupos = Router();
const { pool } = require('../db/db');


// Peticion post para crear un nuevo grupo
// /Directivos/Registro_Grupos
// Falta comprobar
grupos.post('/nuevo-grupo', (req,res)=>{
    const { director_id_maestro,codigo_grupo,jornada_grupo,grado_grupo,year_grupo } = req.body;
    const grupo = [ director_id_maestro,codigo_grupo,jornada_grupo,grado_grupo,year_grupo ];

    const nuevoGrupo = `INSERT INTO grupos VALUES (NEXTVAL ('grupos_seq'), ${director_id_maestro}, ${codigo_grupo}, ${jornada_grupo}, ${grado_grupo}, ${year_grupo});`;

    pool.query(nuevoGrupo, grupo, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `se creo una nuevo grupo`});
        }
    });
});
// Fin post


// Peticion get para mostrar todos los grupos y la cantidad de estudiantes por cada uno
// /Directivos/Registro_Grupos
// Falta organizar
// Esta peticion se realiza a la tabla de grupos-estudiantes y se cuentan los estudiantes por cada grupo
// trayendo, ademas, los datos de cada grupo
grupos.put('/grupo/:id_grupo', (req,res)=>{
    const {director_grupo,jornada_grupo,grado_grupo,year_grupo,estado } = req.body;
    const {id_grupo} =req.params;

    pool.query('UPDATE grupo SET director_grupo=?,jornada_grupo=?,grado_grupo=?,year_grupo=?,estado=? WHERE id_grupo=?',
    [director_grupo,jornada_grupo,grado_grupo,year_grupo,estado,id_grupo], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
// Fin get








module.exports = grupos;

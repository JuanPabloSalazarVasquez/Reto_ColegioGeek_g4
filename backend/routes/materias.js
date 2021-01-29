const { Router } = require('express'); 
const materias = Router();


materias.get('/materia',(req,res)=>{
    res.json(materia);
  });


materias.post('/nueva-materia', (req, res) => {
    const {id_grupo,id_maestro,nombre_materia,codigo_materia}=req.body; 

    //const materia=[id_grupo, id_maestro,nombre_materia,codigo_materia];
    if(!id_grupo || !id_maestro || !nombre_materia ||!codigo_materia){
        res.status(401).json({error:"Por favor, diligencie todos los datos"});
    }else{
        const id_materia= materia.length+1;
        let newMateria = {
            id_materia,
            id_grupo,
            id_maestro,
            nombre_materia,
            codigo_materia
          };

    materia.push(newMateria);
    const json_materia=JSON.stringify(materia);
    false.writeFileSync(json_materia);
    res.status(200).json(materia)
    }
});

materias.get('/materia',(req,res)=>{
    res.status(200).json(materia)
})

module.exports=materias;
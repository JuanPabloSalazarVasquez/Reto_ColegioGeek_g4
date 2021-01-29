const { Router } = require('express'); 
const estudiantes = Router();

estudiantes.post('/nueva-materia', (req, res) => {
    const {id_persona, grado,codigo_estudiante}=req.body; 

    const estudiante=[id_persona, grado,codigo_estudiante];
});



module.exports=estudiantes;
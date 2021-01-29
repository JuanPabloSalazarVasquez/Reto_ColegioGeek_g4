const { Router } = require('express'); 
const estudiantes = Router();

estudiantes.post('/nuevo-estudiante', (req, res) => {
    const {id_persona, grado,codigo_estudiante}=req.body; 

    const estudiante=[id_persona, grado,codigo_estudiante];
});



module.exports=estudiantes;
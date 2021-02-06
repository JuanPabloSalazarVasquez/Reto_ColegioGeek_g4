const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const jwt = require('jsonwebtoken');
//Inicialicacion de las rutas
const directivos = require("./routes/directivos");
const estudiantes = require("./routes/estudiantes");
const grupos = require("./routes/grupos");
const maestro = require("./routes/maestro");
const materias = require("./routes/materias");
const notas = require("./routes/notas");
const persona = require("./routes/persona");
const grupos_materias = require('./routes/grupos-materias');
const grupos_estudiantes = require('./routes/grupos-estudiantes');
const consolidados = require('./routes/consolidados');
//Fin de inicialización de las rutas
const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuración de rutas
app.use(require("./routes/routes"));
app.use("/directivos", directivos);
app.use("/estudiantes", estudiantes);
app.use("/grupos", grupos);
app.use("/maestro", maestro);
app.use("/materias", materias);
app.use("/notas", notas);
app.use("/persona", persona);
app.use('/grupos-materias', grupos_materias);
app.use('/grupos-estudiantes', grupos_estudiantes);
app.use('/consolidados', consolidados);
//Fin configuración de rutas

// Login con JWT
const { pool } = require('./db/db');

app.post('/api/login', async (req, res) => {
  let client = await pool.connect();
	const { tipo_usuario, correo_electronico, numero_documento } = req.body;
    
    console.log(tipo_usuario)
    console.log(correo_electronico)
    console.log(numero_documento)
    try{
    const result = await client.query(`SELECT id_persona, tipo_usuario, estado_cuenta, foto_perfil, nombres, apellidos FROM persona WHERE tipo_usuario='${tipo_usuario}' AND correo_electronico='${correo_electronico}' AND numero_documento='${numero_documento}';`)

    if(result.rows[0]){
      console.log(result.rows[0])
      const token = jwt.sign(result.rows[0], 'geek');
	    res.json({token});
    }else{
      res.json({message: 'Asegurese de ingresar los datos correctamente.'})
    }
  }catch(error){
    console.log(error);
    res.json({message: 'Asegurese de ingresar los datos correctamente.'})
  }
});

app.get('/api/privada', verificarToken ,(req, res) => {
	jwt.verify(req.token, 'geek', (err, data) => {
		if(err) {
			res.sendStatus(403);
		} else {
			res.json({
				data
			});
		}
	});
});

function verificarToken(req, res, next) {
	const bearerheader = req.headers["authorization"];
	console.log(bearerheader)
	if(typeof bearerheader !== 'undefined') {
		const bearer = bearerheader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}

app.get("/api/user-datos/:id_persona/:tipo_usuario", async (req, res) => {
  let client = await pool.connect();
  const { id_persona, tipo_usuario } = req.params;
  try {
    const result = await client.query(
      `SELECT * FROM ${tipo_usuario} WHERE id_persona = ${id_persona};`
    );
    if (result.rows) {
      res.json(result.rows);
    } else {
      res.json({});
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
});


// Fin Login




app.set("port", process.env.PORT || 4535);
app.listen(app.get("port"), () => {
  console.log(`Server on port:${app.get("port")}`);
});

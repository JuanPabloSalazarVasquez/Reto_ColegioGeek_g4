const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
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

app.set("port", process.env.PORT || 4535);
app.listen(app.get("port"), () => {
  console.log(`Server on port:${app.get("port")}`);
});

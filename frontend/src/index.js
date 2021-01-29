import React from "react";
import ReactDOM from "react-dom";

import Inicio_page from "./Pages/inicio_page";
import Login_usuarios from "./Pages/login_usuarios";
import Estudiantes_inicio from "./Pages/estudiantes_inicio";
import Directivos_inicio from "./Pages/directivos_inicio";
import Directivos_registro_estudiantes from "./Pages/directivos_registro_estudiantes";
import Directivos_registro_maestros from "./Pages/directivos_registro_maestros";
import Directivos_registro_grupos from "./Pages/directivos_registro_grupos";
import Directivos_grupos_ver_estudiantes from "./Pages/directivos_grupos_ver_estudiantes";
import Directivos_registro_materias from "./Pages/directivos_registro_materias";
import Maestros_inicio from "./Pages/maestros_inicio";
import Estudiantes_notas from './Pages/estudiantes_notas';
import Estudiantes_materias from './Pages/estudiantes_materias';
import Estudiantes_maestros from './Pages/estudiantes_maestros';
import Estudiantes_configuracion from './Pages/estudiantes_configuracion';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login_usuarios />
        </Route>

        {/* Rutas Estudiantes */}
        <Route path="/estudiantes" exact>
          <Estudiantes_inicio />
        </Route>
        <Route path="/estudiantes/mis_notas" exact>
          <Estudiantes_notas />
        </Route>
        <Route path="/estudiantes/mis_materias" exact>
          <Estudiantes_materias />
        </Route>
        <Route path="/estudiantes/mis_maestros" exact>
          <Estudiantes_maestros />
        </Route>
        <Route path="/estudiantes/mi_cuenta" exact>
          <Estudiantes_configuracion />
        </Route>
        {/* Fin Rutas Estudiantes */}

        {/* Rutas Maestros */}
        <Route path="/maestros" exact>
          <Maestros_inicio />
        </Route>
        {/* Fin Rutas Maestros */}

        {/* Rutas Directivos */}
        <Route path="/directivos/registro_Estudiantes" exact>
          <Directivos_registro_estudiantes />
        </Route>
        <Route path="/directivos/registro_Maestros" exact>
          <Directivos_registro_maestros />
        </Route>
        <Route path="/directivos/registro_Grupos" exact>
          <Directivos_registro_grupos />
        </Route>
        <Route path="/directivos/Grupos_VerEstudiantes" exact>
          <Directivos_grupos_ver_estudiantes />
        </Route>
        <Route path="/directivos/registro_Materias" exact>
          <Directivos_registro_materias />
        </Route>
        <Route path="/directivos" exact>
          <Directivos_inicio />
        </Route>
        {/* Fin Rutas Directivos */}
        <Route path="/" exact>
          <Inicio_page />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

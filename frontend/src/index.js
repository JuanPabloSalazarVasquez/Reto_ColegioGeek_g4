/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ReactDOM from "react-dom";

import Inicio_page from "./Pages/inicio_page";
import Login_usuarios from "./Pages/login_usuarios";
// Directivos
import Directivos_inicio from "./Pages/directivos_inicio";
import Directivos_registro_estudiantes from "./Pages/directivos_registro_estudiantes";
import Directivos_registro_maestros from "./Pages/directivos_registro_maestros";
import Directivos_registro_grupos from "./Pages/directivos_registro_grupos";
import Directivos_grupos_ver_estudiantes from "./Pages/directivos_grupos_ver_estudiantes";
import Directivos_registro_materias from "./Pages/directivos_registro_materias";
// Maestros
import Maestros_inicio from "./Pages/maestros_inicio";
import Maestros_registrar_notas from "./Pages/maestros_registro_notas";
import Maestros_estudiantes_grupos from "./Pages/maestros_estudiantes_grupos";
import Maestros_configuracion from "./Pages/maestros_configuracion";
import Maestros_ver_estudiantes_grupos from "./Pages/maestros_ver_estudiantes_grupos";
import Maestros_registro_notas_grupo_estudiantes from "./Pages/maestros_registro_notas_grupo_estudiantes";
import Maestros_registrar_nota_estudiante from "./Pages/maestros_registrar_nota_estudiante";
// Estudiantes
import Estudiantes_inicio from "./Pages/estudiantes_inicio";
import Estudiantes_notas from "./Pages/estudiantes_notas";
import Estudiantes_grupos_cursados from "./Pages/estudiantes_grupos_cursados";
import Estudiantes_consolidados from "./Pages/estudiantes_consolidados";
import Estudiantes_configuracion from "./Pages/estudiantes_configuracion";
import Estudiantes_notas_ver_notas from './Pages/estudiantes_notas_ver_notas';

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
        <Route path="/estudiantes/grupo_cursados" exact>
          <Estudiantes_grupos_cursados />
        </Route>
        <Route path="/estudiantes/mis_consolidados" exact>
          <Estudiantes_consolidados />
        </Route>
        <Route path="/estudiantes/mi_cuenta" exact>
          <Estudiantes_configuracion />
        </Route>
        <Route path="/estudiantes/mis_notas/ver_notas" exact>
          <Estudiantes_notas_ver_notas />
        </Route>
        {/* Fin Rutas Estudiantes */}

        {/* Rutas Maestros */}
        <Route path="/maestros" exact>
          <Maestros_inicio />
        </Route>
        <Route path="/maestros/registrar_notas" exact>
          <Maestros_registrar_notas />
        </Route>
        <Route path="/maestros/estudiantes_grupos" exact>
          <Maestros_estudiantes_grupos />
        </Route>
        <Route path="/maestros/estudiantes_grupos/ver_estudiantes" exact>
          <Maestros_ver_estudiantes_grupos />
        </Route>
        <Route path="/maestros/mi_cuenta" exact>
          <Maestros_configuracion />
        </Route>
        <Route path="/maestros/registrar_notas/grupo_estudiantes" exact>
          <Maestros_registro_notas_grupo_estudiantes />
        </Route>
        <Route
          path="/maestros/registrar_notas/grupo_estudiantes/agregar_nota"
          exact
        >
          <Maestros_registrar_nota_estudiante />
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

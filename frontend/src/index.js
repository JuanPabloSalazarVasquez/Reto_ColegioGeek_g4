import React from 'react';
import ReactDOM from 'react-dom';

import Inicio_page from './Pages/inicio_page';
import Login_usuarios from './Pages/login_usuarios';
import SistemaME from './Pages/SistemaMaes_Estud';
import Directivos_inicio from './Pages/directivos_inicio';
import Directivos_registro_estudiantes from './Pages/directivos_registro_estudiantes';
import Directivos_registro_maestros from './Pages/directivos_registro_maestros';
import Directivos_registro_grupos from './Pages/directivos_registro_grupos';
import SistemaRVEs from './Pages/SistemaRVEs';
import SistemaDRMa from './Pages/SistemaDirRMa';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Switch>
        <Route path="/Sistema" exact>
          <Login_usuarios />
        </Route>
        <Route path="/Estudiantes_Maestros" exact>
          <SistemaME />
        </Route>
        <Route path="/Directivos/Registro_Estudiantes" exact>
          <Directivos_registro_estudiantes />
        </Route>
        <Route path="/Directivos/Registro_Maestros" exact>
          <Directivos_registro_maestros />
        </Route>
        <Route path="/Directivos/Registro_Grupos" exact>
          <Directivos_registro_grupos />
        </Route>
        <Route path="/Directivos/Grupos_VerEstudiantes" exact>
          <SistemaRVEs />
        </Route>
        <Route path="/Directivos/Registro_Materias" exact> 
          <SistemaDRMa />
        </Route>
        <Route path="/Directivos" exact>
          <Directivos_inicio />
        </Route>
        <Route path="/" exact>
          <Inicio_page />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

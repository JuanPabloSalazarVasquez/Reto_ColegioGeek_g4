import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Main2 from '../Components/Login_usuarios';

import { Estudiantes } from '../Utiles/Mocks/Estudiantes';
import { Maestros } from '../Utiles/Mocks/Maestros';
import { Directivos } from '../Utiles/Mocks/Directivos';

function login_usuarios() {
  return (
    <>
    <Header />
    <Main2 
    Estudiantes = {Estudiantes} 
    LargoE = {LargoEstudiantes} 
    Maestros = {Maestros} 
    LargoM = {LargoMaestros}
    Directivos = {Directivos}
    LargoD = {LargoDirectivos}
    />
    <Footer />
    </>
  );
}

const LargoEstudiantes = Estudiantes.length;
const LargoMaestros = Maestros.length;
const LargoDirectivos = Directivos.length;

export default login_usuarios;
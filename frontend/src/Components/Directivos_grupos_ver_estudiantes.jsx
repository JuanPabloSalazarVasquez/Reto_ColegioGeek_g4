import React from 'react';
import axios from 'axios';

import '../Styles/VerRegEstu.css';

import { withRouter, Link } from 'react-router-dom';
import { Estudiantes } from '../Utiles/Mocks/Estudiantes';
import { Materias } from '../Utiles/Mocks/Materias';


let variablamamalona = -1;


class Directivos_grupos_ver_estudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: Estudiantes.filter(Esito => Esito.Grupo == this.props.InfoUsurio[0].CodGrupo),
            ArregloMamalon:[
                Materias.filter(Esito => Esito.Sexto == true), 
                Materias.filter(Esito => Esito.Septimo == true), 
                Materias.filter(Esito => Esito.Octavo == true), 
                Materias.filter(Esito => Esito.Noveno == true), 
                Materias.filter(Esito => Esito.Decimo == true),
                Materias.filter(Esito => Esito.Once == true)]
        }
    }
 funti = () =>{

    if (this.props.InfoUsurio[0].Grado == "Sexto") {
        variablamamalona = 0;
} else if (this.props.InfoUsurio[0].Grado == "Septimo"){
    variablamamalona = 1;
}else if (this.props.InfoUsurio[0].Grado == "Octavo"){
    variablamamalona = 2;
}else if (this.props.InfoUsurio[0].Grado == "Noveno"){
    variablamamalona = 3;
}else if (this.props.InfoUsurio[0].Grado == "Decimo"){
    variablamamalona = 4;
}else if (this.props.InfoUsurio[0].Grado == "Once"){
    variablamamalona = 5;
}
 }

 //Petición get para obtener los estudiantes existentes dentro de un grupo
 componentDidMount(){
    axios.get(`http://localhost:4535/grupos-estudiantes/estudiantes-ver-grupos-estudiantes-directivos/${this.state.id_directivo}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }
//Fin get

//Petición post para agregar nuevos estudiantes dentro de un grupo
post_grupo(){
    axios.post(`http://localhost:4535/grupos-estudiantes//${this.state.id_directivo}`, {  }) //Esta petición está pendiente en el backend
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }
//Fin post

    render() {
        return (
            <>
                <div id="VerEstuGrupContainer">
                    <div className="FiltradoGroup">
                        <div className="FiltrosREstudiante">
                            <div>
                                <input type="number" className="SelectR" placeholder="Matricula" autoComplete="off" />
                            </div>
                            <div>
                                <input type="text" className="SelectR" placeholder="Nombre" autoComplete="off" />
                            </div>
                            <div>
                                <input type="text" className="SelectR" placeholder="Apellido" autoComplete="off" />
                            </div>
                        </div>
                        <div className=" EstuFilter">
                            {this.state.filter.map((Esito, index) => {
                                return (
                                    <div key={index} className="FiltrosREstudiante">
                                        <div className="SelectR">
                                            <p>{Esito.Matricula}</p>
                                        </div>
                                        <div className="SelectR">
                                            <p>{Esito.Name}</p>
                                        </div>
                                        <div className="SelectR">
                                            <p>{Esito.Apellido}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="VerMate">
                        <div className="VerMate2">
                            <div className="SelectR SelectR3">
                                <p >Materias</p>
                            </div>
                            <Link to={{
                                pathname: "/directivos/registro_Grupos",
                                state: {
                                    Name: this.props.InfoUsurio[0].Name,
                                    Contraseña: this.props.InfoUsurio[0].Contraseña,
                                    Usuario: this.props.InfoUsurio[0].Usuario,
                                    Edad: this.props.InfoUsurio[0].Edad,
                                    Cargo: this.props.InfoUsurio[0].Cargo
                                }
                            }}>
                                <button className="SelectR button">Volver</button>
                            </Link>
                        </div>
                        <div className="VerMate3">
                        {this.funti()}
                            {
                                this.state.ArregloMamalon[variablamamalona].map((Esito, index) => {
                                    return (
                                        <div className="VerMate4" key={index}>
                                            <div className="SelectR">
                                                <p> {Esito.Nombre}  </p>
                                            </div>
                                            <div className="SelectR"> 
                                                <p>{Esito.CodigoM}</p>
                                            </div>
                                        </div>

                                    );
                                })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Directivos_grupos_ver_estudiantes);


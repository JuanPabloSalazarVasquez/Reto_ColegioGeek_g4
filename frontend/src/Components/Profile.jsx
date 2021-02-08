import React from 'react';

import '../Styles/Directivos.css';

import {
    Redirect
} from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Bool1: false
        }
    }

    logout = () => {
        sessionStorage.clear()
        this.setState({Bool1: true})
      }

    render() {
        return (
            <>
                <div id="ProfileContainer">
                    <div>
                    <img className="ImgProfile" src={this.props.foto} />
                    </div>
                    <div id="DatosContainer">
                    <p className="Pprofile">Bienvenido {this.props.Name}</p>
                    <p className="Pprofile">Cargo: {this.props.Cargo}</p>
                    </div>
                    
                    <button className="button button2" onClick={this.logout}>Cerrar sesión</button>
                    {this.state.Bool1 && (
                  <Redirect
                    to={{
                      pathname: "/"
                    }}
                  ></Redirect>
                )}
                </div>
            </>
        );
    }
}

export default Profile;
import React from 'react';

import Profile from '../Components/Profile';
import Estudiantes_inicio from '../Components/Estudiantes_inicio';

import '../Styles/Estudiantes.css';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class estudiantes_inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                  <h1>Estudiantes</h1>
                    <div id="DirectivosGrid">
                        <div id="ProfileCont">
                            <Profile
                                Name= 'Emanuel'
                                Edad= '13'
                                Cargo= 'Estudiante' />
                        </div>
                        <Estudiantes_inicio />
                    </div>
            </>
        );
    }
}

export default withRouter(estudiantes_inicio);
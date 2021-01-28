import React from 'react';

import Profile from '../Components/Profile';

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
                <div id="DirectivosContainer">
                  <h1>Estudiantes</h1>
                    <div id="DirectivosGrid">
                        <div id="ProfileCont">
                            <Profile
                                Name= 'Emanuel'
                                Edad= '13'
                                Cargo= 'Estudiante' />
                        </div>
                        <div id="CardsCont">
                          <p>En la parte de estudiantes se podran consultar las notas y los consolidados de notas, 
                            al igual que los años que ya curso el estudiantes.
                            Tambien podriamos poner las notas por materia, y los años cursados

                          </p>
                            <div id="Grupo1">
        
                                <div className="CardS"><img src="https://1.bp.blogspot.com/-L3l1J1Z3ytg/X0hNNESpzuI/AAAAAAAAPME/3V8A1tELyXEyZw5XJaGn3A3HxnYTFQ1cACLcBGAsYHQ/s16000/Estudiantes.png" className="img-direc1" alt="logo_1" /></div>
                                
                                <div className="CardS"><img src="https://1.bp.blogspot.com/-zTYMDm4_vuk/X0ioVfB0ccI/AAAAAAAAPNY/Y0Ir1KWfCLUKgQw6dFWZct0qz84e-GKfACLcBGAsYHQ/s16000/Mestros.png" className="img-direc2" alt="logo_2" /></div>
                                
                            </div>
                            <div id="Grupo2">
                                
                            <div className="CardS"><img src="https://1.bp.blogspot.com/-fzuKkHYNNq8/X0i-8mrociI/AAAAAAAAPOI/QD6HCg571wcMTe5C9Rz8-vTDZzNCyey8wCLcBGAsYHQ/s16000/Grupos.png" className="img-direc3" alt="logo_3" /></div>

                                <div className="CardS"><img src="https://1.bp.blogspot.com/-uMbl2HbB-W0/X0ni-gTOYbI/AAAAAAAAPOs/m-VG-q_myzkjtpV5krfPl3sRb89RWNYBQCLcBGAsYHQ/s16000/Materias.png" className="img-direc4" alt="logo_4" /></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(estudiantes_inicio);
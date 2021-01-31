/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {withRouter} from 'react-router-dom';
import Maestros_ver_estudiantes_grupos from '../Components/Maestros_ver_estudiantes_grupos';

import HeaderSistema_Maestros from '../Components/HeaderSistema_Maestros';

class maestros_ver_estudiantes_grupos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <HeaderSistema_Maestros pathname = '/maestros/estudiantes_grupos'/>
            <Maestros_ver_estudiantes_grupos />
            </>
         );
    }
}
 
export default withRouter(maestros_ver_estudiantes_grupos);
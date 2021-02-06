/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {withRouter} from 'react-router-dom';
import Directivos_grupos_ver_estudiantes from '../Components/Directivos_grupos_ver_estudiantes';

import HeaderSistema from '../Components/HeaderSistema';

class directivos_grupos_ver_estudiantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <>
            <HeaderSistema classDis="Dis"/>
            <Directivos_grupos_ver_estudiantes 
            />
            </>
         );
    }
}
 
export default withRouter(directivos_grupos_ver_estudiantes);
import React from 'react';

import '../Styles/Footer.css';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.setState = { }
    }
    render(){
        return(
            <>
            <div className="FooterContainer">
                <p className="pFooter">Copyright © 2021 Colegio Geek - Todos los derechos reservados.</p>
            </div>
            </>
        );
    }
}
import React from 'react';
import { Link } from 'react-router-dom'

import SideMenu from './side-menu'

import './usuario-empresa.css'

export default props => {
    return(
        <>
            <SideMenu />
            <div className="main-body">
                <div className="helper"></div>
                
                <div className="empresas-body p-2">
                    <div className="title">
                        NOME DO USUARIO
                        <Link className="btn btn-info" to="/app">Cadastra nova empresa</Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
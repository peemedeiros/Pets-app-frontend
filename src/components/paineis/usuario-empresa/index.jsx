import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import { getToken } from '../../../services/auth-service'

import SideMenu from './side-menu'

import './usuario-empresa.css'

export default class Index extends Component {
    
    render(){
        if(getToken()){
            return(
                <>
                    <SideMenu />
                    <div className="main-body">
                        <div className="helper"></div>
                        
                        <div className="empresas-body p-2">
                            <div className="title">
                                NOME DO USUARIO
                                <Link className="btn btn-info" to="/painel/cadastrar">Cadastra nova empresa</Link>
                            </div>
                            
                        </div>
                    </div>
                </>
            )
        }else{
           return(
                <Redirect to="/login"/>
            ) 
        }
    }
}
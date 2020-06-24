import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import { getToken, signOut } from '../../../services/auth-service'

import SideMenu from './side-menu'

import './usuario-empresa.css'

export default class Index extends Component {
    
    constructor(){
        super()
        this.state = {
            logged:false
        }
    }

    render(){

        if(getToken){
            return(
                <>
                    <SideMenu logged={this.state.logged}/>
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
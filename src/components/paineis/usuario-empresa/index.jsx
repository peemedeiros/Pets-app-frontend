import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import { getToken } from '../../../services/api'
import CardEmpresa from './card-empresa';

import SideMenu from './side-menu'
import './usuario-empresa.css'

const TOKEN_KEY = '@PetsApp:token';

export default class Index extends Component {

    constructor(){
        const dados = JSON.parse(localStorage.getItem(TOKEN_KEY))
        super()
        this.state={
            nome:dados.user.nome
        }
    }
    
    render(){
        if(getToken()){
            return(
                <>
                    <SideMenu nomeUsuario={this.state.nome}/>
                    <div className="main-body">
                        <div className="helper"></div>
                        
                        <div className="empresas-body p-4">
                            <div className="title">
                                <h3>{this.state.nome}</h3>
                                <Link className="btn btn-info" to="/painel/cadastrar">Cadastra nova empresa</Link>
                            </div>
                            <CardEmpresa />
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
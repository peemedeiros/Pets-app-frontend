import React, {Component} from 'react';

import empresa from '../../assets/empresa.png'
import cliente from '../../assets/cliente.png'

export default class TipoCadastro extends Component {
    
    constructor(){
        super()
        this.state = {
            nome:'',
            email:'',
            celular:'',
            password:'',
            password_confirmation:'',
            tipo_usuario:''
        }
    }

    render(){
        return(
            <div className="tipo-cadastro">
                <h1 className="tipo-cadastro-title">
                    COMO DESEJA USAR NOSSOS SERVICOS ?
                </h1>
                <div className="tipo-empresa">
                    <label className="tipo-empresa-card mb-3" for="empresa">
                        <img src={empresa} alt="empresa" />
                    </label>
                    <div className="row">
                        <input type="radio" name="tipo_usuario" className="mr-3" id="empresa" required/>
                        <h3>Como empresa</h3>
                    </div>
                </div>
                <div className="tipo-usuario">
                    <label className="tipo-empresa-card with-bg mb-3" for="usuario">
                        <img src={cliente} alt="cliente" />
                    </label>
                    <div className="row">
                        <input type="radio" name="tipo_usuario" className="mr-3" id="usuario" required/>
                        <h3>Como cliente</h3>
                    </div>
                </div>
                <div className="tipo-cadastro-title position-bottom">
                    <div className="container md">
                        <button className="btn btn-light-blue btn-lg btn-block">
                            CADASTRAR
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}
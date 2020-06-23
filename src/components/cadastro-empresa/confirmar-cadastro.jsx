import React, { Component } from 'react';

export default class ConfirmarCadastro extends Component{

    constructor(){
        super()
        this.state = {
            password:'',
            password_confirmation:'',
            tipo_cadastro:1
        }
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState = ({[name]: value})
    }

    fileHandler = e =>{
        this.setState({ logo:e.target.files[0]});
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.inserindoDadosUsuario(this.state);
        this.props.nextStep(2);
    }

    render(){
        if(this.props.currentStep !== 1)
            return null
        
        return(
            <>
                <div className="formularioConfirmacao center">
                    <h4 className="mb-5">Crie uma senha segura</h4>
                    <div className="form-group">
                        <label htmlFor="inputSenha">Senha</label>
                        <input type="password" name='password' onChange={this.handleChange} className="form-control cnpj" id="inputSenha" placeholder="*********"/>
                        <small id="emailHelp" className="form-text text-muted">Não compartilhe sua senha com ninguém.</small>
                    </div>
    
                    <div className="form-group mb-5">
                        <label htmlFor="inputConfimacaoSenha">Confirmar senha</label>
                        <input type="password" name='password_confirmation' className="form-control cnpj" id="inputConfimacaoSenha" placeholder="*********"/>
                    </div>
    
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-light center"
                            onClick={() => this.props.nextStep(2)}>
                            Cadastrar
                        </button>
                    </div>
    
                </div>
            </>
        )

    }
    
}
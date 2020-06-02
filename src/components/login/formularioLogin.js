import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class formularioLogin extends Component{

    constructor(){
        super()
        this.stateInicial = {
            email:'',
            password:''
        }
        this.state = this.stateInicial
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        await this.props.realizarLogin(this.state)
    }

    render(){
        return(
            <div className="container">
                <h2>Painel da Empresa</h2>
                <h5>Faça o controle da sua empresa</h5>

                <form className="form_login" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label for="inputEmail">E-mail</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" id="inputEmail" placeholder="E-mail do dono"/>
                    </div>

                    <div className="form-group">
                        <label for="inputSenha">Senha</label>
                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="password" id="inputSenha" placeholder="Senha"/>
                    </div>

                    <div className="titulo_form_right">
                        <Link className="nav-link" to=""><h5>Esqueceu sua senha?</h5></Link>
                    </div>

                    <div className="form-group flex-center">
                        <button type="submit" class="btn btn-light btn-lg btn-block">
                             Login 
                        </button>
                    </div>

                    <div className="titulo_form">
                    <h8>Ainda não possui um cadastro?</h8>
                    </div>

                    <div className="titulo_form">
                        <Link className="nav-link" to="/"><h8>Cadastrar-se</h8></Link>
                    </div>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AlertError from '../errors/alertError';
import SpinnerLoader from '../template/spinnerLoader';

const TOKEN = '@PetsApp:token'

export default class formularioLogin extends Component{

    constructor(){
        super()
        this.stateInicial = {
            email:'',
            password:'',
            disabled:false,
            errors:{
                alert:false,
                error_data:[]
            }
        }
        this.state = this.stateInicial
    }

    //Atualiza os estatos dos inputs
    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    //Retorna a resposta da requisição na API 
    handleSubmit = async e => {
        e.preventDefault();
        
        //Desabilita o botão para que não haja problemas como dupla requisição.
        this.setState({ disabled: true })
        const res = await this.props.realizarLogin(this.state)
        
        //Traz os erros
        if(res.status != 200){
            if(res.status === 422)
                this.setState({ errors:{...this.state.errors, alert:true, error_data:Object.values(res.data.errors)} })
            else
                this.setState({ errors:{...this.state.errors, alert:true, error_data:["Usuário não encontrado!"]} })
        }
        
        //Envia o token para o localStorage
        localStorage.setItem(TOKEN,JSON.stringify(res.data))

        //Reabilita o botão após o retorno da requisição
        this.setState({ disabled: false })
    }
    render(){

        return(
            <div className="container">
                <h2>Painel da Empresa</h2>
                <h5>Faça o controle da sua empresa</h5>
                
                <AlertError error={this.state.errors.alert} error_data={this.state.errors.error_data}/>

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
                        <button type="submit" class="btn btn-light btn-lg btn-block" disabled={this.state.disabled}>
                            <div className="spinner-row">
                                Login 
                                <SpinnerLoader status={this.state.disabled}/>
                            </div>
                        </button>
                    </div>

                    <div className="titulo_form">
                    <h8>Ainda não possui um cadastro?</h8>
                    </div>

                    <div className="titulo_form">
                        <Link className="nav-link" to="/cadastro"><h8>Cadastrar-se</h8></Link>
                    </div>
                </form>
            </div>
        )
    }
}
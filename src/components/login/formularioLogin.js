import React from 'react';
import { Link } from 'react-router-dom';

export default function formularioLogin(){
    return(
        <div className="container">
            <h2>Painel da Empresa</h2>
            <h5>Faça o controle da sua empresa</h5>

            <form className="form_login">

                <div className="form-group">
                    <label for="inputEmail">E-mail</label>
                    <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail do dono"/>
                </div>

                <div className="form-group">
                    <label for="inputSenha">Senha</label>
                    <input type="text" className="form-control" id="inputSenha" aria-describedby="senhalHelp" placeholder="Senha"/>
                </div>

                <div className="titulo_form_right">
                    <Link className="nav-link" to=""><h5>Esqueceu sua senha?</h5></Link>
                </div>

                <div className="form-group flex-center">
                    <button type="button" class="btn btn-light btn-lg btn-block">
                        <Link className="nav-link" to="/"> Login </Link>
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
import React from 'react';
import { Link } from 'react-router-dom';

export default function PreCadastro(){
    return(
        <>
            <form className='pre-cadastro'>
                <h2 className='text-center'> Cadastre sua empresa </h2>
                <div className="form-group">
                    <label for="inputNome">Nome completo</label>
                    <input type="text" className="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Nome do dono da empresa"/>
                </div>

                <div className="form-group">
                    <label for="inputEmail">E-mail</label>
                    <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail do dono da empresa"/>
                </div>

                <div className="form-group">
                    <label for="inputCelular">Celular com DDD</label>
                    <input type="text" className="form-control" id="inputCelular" aria-describedby="emailHelp" placeholder="Celular do dono da empresa"/>
                </div> 
                <div className="form-group flex-center">
                    <button type="button" className="btn btn-light">
                        <Link className="nav-link" to="/cadastro"> INICIAR CADASTRO </Link>
                    </button>
                </div>
            </form>
        </>
    )   
}
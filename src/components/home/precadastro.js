import React from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function PreCadastro(){

    const [{ values }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        localStorage.setItem('@petsApp/step1', JSON.stringify(values))
    }

    return(
        <>
            <form className='pre-cadastro'>
                <h2 className='text-center'> Cadastre sua empresa </h2>
                <div className="form-group">
                    <label htmlFor="inputNome">Nome completo</label>
                    <input type="text" onChange={handleChange} name="nomeDono" className="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Nome do dono da empresa"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputEmail">E-mail</label>
                    <input type="text" onChange={handleChange} name="emailDono" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail do dono da empresa"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputCelular">Celular com DDD</label>
                    <input type="text" onChange={handleChange} name="celularDono" className="form-control" id="inputCelular" aria-describedby="emailHelp" placeholder="Celular do dono da empresa"/>
                </div> 
                <div className="form-group flex-center">
                    <button type="submit" className="btn btn-light" >
                        <Link onClick={ handleSubmit(() => enviarContato()) }  className="nav-link" to="/cadastro" > INICIAR CADASTRO </Link>
                    </button>
                </div>
            </form>
        </>
    )
    
}
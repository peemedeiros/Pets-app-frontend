import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PreCadastro extends Component{

    constructor(){
        super()
        this.state = {
            nomeDono:'',
            emailDono:'',
            CelularDono:'',
        }
    }
    
    inputHadler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

        console.log(name)
        console.log(value)
    }

    render(){

        let errorBorder = ''
        const inputValidator = element => {
            if(element.value === ''){
                errorBorder = 'red';
                console.log(errorBorder)
            }
        }

        return(
            <>
                <form className='pre-cadastro'>
                    <h2 className='text-center'> Cadastre sua empresa </h2>
                    <div className="form-group">
                        <label for="inputNome">Nome completo</label>
                        <input type="text" className="form-control" style={{borderColor:`${errorBorder}`}} id="inputNome" onChange={this.inputHadler} onBlur={inputValidator(this)} aria-describedby="emailHelp" placeholder="Nome do dono da empresa"/>
                    </div>
    
                    <div className="form-group">
                        <label for="inputEmail">E-mail</label>
                        <input type="text" className="form-control" id="inputEmail" onChange={this.inputHadler} aria-describedby="emailHelp" placeholder="E-mail do dono da empresa"/>
                    </div>
    
                    <div className="form-group">
                        <label for="inputCelular">Celular com DDD</label>
                        <input type="text" className="form-control" id="inputCelular" aria-describedby="emailHelp" placeholder="Celular do dono da empresa"/>
                    </div> 
                    <div className="form-group flex-center">
                        <button type="button" className="btn btn-light" >
                            <Link className="nav-link" to="/cadastro"> INICIAR CADASTRO </Link>
                        </button>
                    </div>
                </form>
            </>
        )
    }
    
}
import React, {Component} from 'react';

export default class PreCadastro extends Component{

    render(){

        return(
            <>
                <form className='pre-cadastro'>
                    <h2 className='text-center'> Cadastre sua empresa </h2>
                    <div className="form-group">
                        <label htmlFor="inputNome">Nome completo</label>
                        <input type="text" onChange={this.props.handleChange} name="nomeDono" className="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Nome do dono da empresa"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputEmail">E-mail</label>
                        <input type="text" onChange={this.props.handleChange} name="emailDono" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="E-mail do dono da empresa"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCelular">Celular com DDD</label>
                        <input type="text" onChange={this.props.handleChange} name="celularDono" className="form-control" id="inputCelular" aria-describedby="emailHelp" placeholder="Celular do dono da empresa"/>
                    </div> 
                    <div className="form-group flex-center">
                        <button type="submit" className="btn btn-light" onClick={() => this.props.nextStep(1)} >
                             INICIAR CADASTRO
                        </button>
                    </div>
                </form>
            </>
        )
    }
}
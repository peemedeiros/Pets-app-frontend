import React from 'react';
import { Link } from 'react-router-dom';

export default function FormularioCadastro(props){
    return(
        <>
            <form className='cadastroEmpresa center'>
                <div className="form-group">
                    <label htmlFor="inputCnpj">CNPJ</label>
                    <input type="txt" className="form-control cnpj" id="inputCnpj" placeholder="Qual é o CNPJ da empresa?"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputRazaoSocial">Razão social</label>
                    <input type="txt" className="form-control" id="inputRazaoSocial" placeholder="Razão social da empresa"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputNomeEmpresa">Nome da empresa</label>
                    <input type="txt" className="form-control" id="inputNomeEmpresa" placeholder="Nome da empresa"/>
                    <small id="emailHelp" className="form-text text-muted">Esse será o nome que aparecerá no aplicativo</small>
                </div>

                <div className="form-group">
                    <label htmlFor="inputTelefoneEmpresa">Telefone</label>
                    <input type="txt" className="form-control" id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                </div>
                    
                <div className="form-group">
                    <label htmlFor="inputCep">CEP</label>
                    <input type="txt" className="form-control cep" id="inputCep" placeholder="CEP da empresa"/>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="inputCidade">Cidade</label>
                        <input type="text" className="form-control" id="inputCidade" readOnly placeholder="Cidade da empresa"/>
                    </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputEstado">Estado</label>
                    <input type="password" className="form-control" id="inputEstado" readOnly placeholder="UF da empresa"/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputBairro">Bairro</label>
                    <input type="text" className="form-control cnpj" id="inputBairro" placeholder="Bairro da empresa"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputLogradouro">Logradouro</label>
                    <input type="text" className="form-control cnpj" id="inputLogradouro" placeholder="Logradouro da empresa"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputNumero">Numero</label>
                    <input type="text" className="form-control cnpj" id="inputNumero" placeholder="Número do endereço"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputComplemento">Complemento</label>
                    <input type="text" className="form-control" id="inputComplemento" placeholder="Complemento do endereço"/>
                </div>
                <div className="form-group margin-mini-bot">
                    <label htmlFor="inputComplemento">Sua empresa possui seviço de transporte?</label><br/>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="inputSim" name="radioTransporte" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="inputSim">Sim</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="inputNao" name="radioTransporte" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="inputNao">Não</label>
                    </div>
                </div>

                <div className="form-group flex-center">
                    <button type="button" onClick={props.secondStep} className="btn btn-light">
                        Continuar
                        {/* <Link className="nav-link" to="/confirmar"> Continuar </Link> */}
                    </button>
                </div>
                

            </form>
        </>
    )
}
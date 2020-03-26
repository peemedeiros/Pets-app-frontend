import React from 'react';
import { Link } from 'react-router-dom';

export default function FormularioCadastro(){
    return(
        <>
            <form className='cadastroEmpresa center'>
                <div class="form-group">
                    <label for="inputCnpj">CNPJ</label>
                    <input type="txt" class="form-control cnpj" id="inputCnpj" placeholder="Qual é o CNPJ da empresa?"/>
                </div>

                <div class="form-group">
                    <label for="inputRazaoSocial">Razão social</label>
                    <input type="txt" class="form-control" id="inputRazaoSocial" placeholder="Razão social da empresa"/>
                </div>

                <div class="form-group">
                    <label for="inputNomeEmpresa">Nome da empresa</label>
                    <input type="txt" class="form-control" id="inputNomeEmpresa" placeholder="Nome da empresa"/>
                    <small id="emailHelp" class="form-text text-muted">Esse será o nome que aparecerá no aplicativo</small>
                </div>

                <div class="form-group">
                    <label for="inputTelefoneEmpresa">Telefone</label>
                    <input type="txt" class="form-control" id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                </div>
                    
                <div class="form-group">
                    <label for="inputCep">CEP</label>
                    <input type="txt" class="form-control cep" id="inputCep" placeholder="CEP da empresa"/>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label for="inputCidade">Cidade</label>
                        <input type="text" className="form-control" id="inputCidade" readOnly placeholder="Cidade da empresa"/>
                    </div>
                        <div className="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                    <input type="password" className="form-control" id="inputEstado" readOnly placeholder="UF da empresa"/>
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputBairro">Bairro</label>
                    <input type="text" className="form-control cnpj" id="inputBairro" placeholder="Bairro da empresa"/>
                </div>

                <div className="form-group">
                    <label for="inputLogradouro">Logradouro</label>
                    <input type="text" className="form-control cnpj" id="inputLogradouro" placeholder="Logradouro da empresa"/>
                </div>

                <div className="form-group">
                    <label for="inputNumero">Numero</label>
                    <input type="text" className="form-control cnpj" id="inputNumero" placeholder="Número do endereço"/>
                </div>

                <div className="form-group">
                    <label for="inputComplemento">Complemento</label>
                    <input type="text" className="form-control" id="inputComplemento" placeholder="Complemento do endereço"/>
                </div>
                <div className="form-group margin-mini-bot">
                    <label for="inputComplemento">Sua empresa possui seviço de transporte?</label><br/>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="inputSim" name="radioTransporte" class="custom-control-input" />
                        <label class="custom-control-label" for="inputSim">Sim</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="inputNao" name="radioTransporte" class="custom-control-input" />
                        <label class="custom-control-label" for="inputNao">Não</label>
                    </div>
                </div>

                <div className="form-group flex-center">
                    <button type="button" className="btn btn-light">
                        <Link className="nav-link" to="/confirmar"> Continuar </Link>
                    </button>
                </div>
                

            </form>
        </>
    )
}
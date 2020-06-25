import React, { Component } from 'react';
import  InputErrorMessage from '../errors/inputErrorMsg';

export default class FormularioCadastro extends Component{
    
    constructor(){
        super()
        
        this.validade = this.validade.bind(this);
    }

    validade(e){

        this.props.handleChange(e)
        const {name, value} = e.target;

        if(!value){

            switch(name){
                case 'cnpj':
                    e.target.className = 'form-control cnpj is-invalid'
                    break;
                case 'razao_social':
                case 'nome_fantasia':
                case 'telefone_empresa':
                    e.target.className = 'form-control is-invalid'
                    break;
                case 'cep':
                    e.target.className = 'form-control cep is-invalid'
                    break;
                case 'bairro':
                case 'logradouro':
                case 'numero':
                    e.target.className = 'form-control cnpj is-invalid'
                    break;
            }
        }else{

            switch(name){
                case 'cnpj':
                    e.target.className = 'form-control cnpj'
                    break;
                case 'razao_social':
                case 'nome_fantasia':
                case 'telefone_empresa':
                    e.target.className = 'form-control'
                    break;
                case 'cep':
                    e.target.className = 'form-control cep'
                    break;
                case 'bairro':
                case 'logradouro':
                case 'numero':
                    e.target.className = 'form-control cnpj'
                    break;

            }
        }
    }

    render(){
        
        if(this.props.step !== 1)
            return null

        return(
            <>
                <form className='cadastroEmpresa center'>


                    <div className="form-group">
                        <label htmlFor="inputCnpj">CNPJ</label>
                        <input type="text"  name="cnpj"  onChange={this.validade} onBlur={this.validade} value={this.props.cnpj} className="form-control cnpj" id="inputCnpj" placeholder="Qual é o CNPJ da empresa?"/>
                        <InputErrorMessage field={this.props.cnpj}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputRazaoSocial">Razão social</label>
                        <input type="text"  name="razao_social"  onChange={this.validade} onBlur={this.validade} className="form-control" id="inputRazaoSocial" value={this.props.razao_social} placeholder="Razão social da empresa"/>
                        <InputErrorMessage field={this.props.razao_social}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNomeEmpresa">Nome da empresa</label>
                        <input type="text"  name="nome_fantasia"  onChange={this.validade} onBlur={this.validade} className="form-control" id="inputNomeEmpresa" value={this.props.nome_fantasia} placeholder="Nome da empresa"/>
                        <InputErrorMessage field={this.props.nome_fantasia}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputTelefoneEmpresa">Telefone</label>
                        <input type="text"  name="telefone_empresa"  onChange={this.validade} onBlur={this.validade} className="form-control" value={this.props.telefone_empresa} id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                        <InputErrorMessage field={this.props.telefone_empresa}/>
                    </div>
                        
                    <div className="form-group">
                        <label htmlFor="inputCep">CEP</label>
                        <input 
                            type="text"  
                            name="cep" 
                            onBlur={() => this.props.findCep(this.props.cep)} 
                            onChange={this.validade} value={this.props.cep} 
                            className="form-control cep" id="inputCep" 
                            placeholder="CEP da empresa"
                        />
                        
                        <InputErrorMessage field={this.props.cep}/>
                    </div>
    
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputCidade">Cidade</label>
                            <input type="text"  name="cidade" onChange={this.props.handleChange} className="form-control" value={this.props.cidade} id="inputCidade" readOnly placeholder="Cidade da empresa"/>
                        </div>
                            <div className="form-group col-md-4">
                            <label htmlFor="inputEstado">Estado</label>
                            <input type="text"  name="estado" onChange={this.props.handleChange} className="form-control" value={this.props.uf} id="inputEstado" readOnly placeholder="UF da empresa"/>
                        </div>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputBairro">Bairro</label>
                        <input type="text"  name="bairro"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj" value={this.props.bairro} id="inputBairro" placeholder="Bairro da empresa"/>
                        <InputErrorMessage field={this.props.bairro}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputLogradouro">Logradouro</label>
                        <input type="text"  name="logradouro"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj" value={this.props.logradouro} id="inputLogradouro" placeholder="Logradouro da empresa"/>
                        <InputErrorMessage field={this.props.logradouro}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNumero">Numero</label>
                        <input type="text"  name="numero"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj"  id="inputNumero" placeholder="Número do endereço"/>
                        <InputErrorMessage field={this.props.numero}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputComplemento">Complemento</label>
                        <input type="text"  name="complemento" onChange={this.handleChange} className="form-control" id="inputComplemento" placeholder="Complemento do endereço"/>
                    </div>

                    <div className="form-group flex-center">
                        <button 
                            type="button"  
                            className="btn btn-light"
                            onClick={e => this.props.nextStep(2)}>
                            Continuar
                        </button>
                    </div>

                </form>
            </>
        )

    }

}
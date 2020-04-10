import React, { Component } from 'react';
import { cnpjMask, telefoneMask, cepMask } from './homeMasks';
import  InputErrorMessage from './inputErrorMsg';

export default class FormularioCadastro extends Component{
    
    constructor(){
        super()
        this.state = {
            razao_social:'',
            nome_empresa:'',
            cnpj:'',
            telefone_empresa:'',
            cep:'',
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            cidade:'',
            uf:'',
            transporte:''
        }
        this.validade = this.validade.bind(this);
    }

    findCep = cep =>{
        
        try{
             fetch(`https://viacep.com.br/ws/${cep}/json`, {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => (res.json()))
            .then(res => {
                this.setState({
                    logradouro:res.logradouro,
                    bairro:res.bairro,
                    cidade:res.localidade,
                    uf:res.uf
                })
            })
        }catch(error){
            console.log('oi')
        }
        
    }

    handleChange = e =>{
        const {name, value} = e.target;

        switch(name){
            case 'cnpj':
                this.setState({[name]:cnpjMask(value)})
                break;
            case 'telefone_empresa':
                this.setState({[name]:telefoneMask(value)})
                break;
            case 'cep':
                this.setState({[name]:cepMask(value)})
                break;
            default:
                this.setState({[name]:value})
                break;
        }
    }

    validade(e){
        this.handleChange(e)
        const {name, value} = e.target;

        if(!value){

            switch(name){
                case 'cnpj':
                    e.target.className = 'form-control cnpj is-invalid'
                    break;
                case 'razao_social':
                case 'nome_empresa':
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
                case 'nome_empresa':
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
        
        if(this.props.currentStep !== 1)
            return null
        return(
            <>
                <div className='cadastroEmpresa center'>
                    <div className="form-group">
                        <label htmlFor="inputCnpj">CNPJ</label>
                        <input type="text"  name="cnpj"  onChange={this.validade} onBlur={this.validade} value={this.state.cnpj} className="form-control cnpj" id="inputCnpj" placeholder="Qual é o CNPJ da empresa?"/>
                        <InputErrorMessage field={this.state.cnpj}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputRazaoSocial">Razão social</label>
                        <input type="text"  name="razao_social"  onChange={this.validade} onBlur={this.validade} className="form-control" id="inputRazaoSocial" value={this.state.razao_social} placeholder="Razão social da empresa"/>
                        <InputErrorMessage field={this.state.razao_social}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNomeEmpresa">Nome da empresa</label>
                        <input type="text"  name="nome_empresa"  onChange={this.validade} onBlur={this.validade} className="form-control" id="inputNomeEmpresa" value={this.state.nome_empresa} placeholder="Nome da empresa"/>
                        <InputErrorMessage field={this.state.nome_empresa}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputTelefoneEmpresa">Telefone</label>
                        <input type="text"  name="telefone_empresa"  onChange={this.validade} onBlur={this.validade} className="form-control" value={this.state.telefone_empresa} id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                        <InputErrorMessage field={this.state.telefone_empresa}/>
                    </div>
                        
                    <div className="form-group">
                        <label htmlFor="inputCep">CEP</label>
                        <input type="text"  name="cep" onBlur={() => this.findCep(this.state.cep)} onChange={this.validade} value={this.state.cep} className="form-control cep" id="inputCep" placeholder="CEP da empresa"/>
                        <InputErrorMessage field={this.state.cep}/>
                    </div>
    
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputCidade">Cidade</label>
                            <input type="text"  name="cidade" onChange={this.props.handleChange} className="form-control" value={this.state.cidade} id="inputCidade" readOnly placeholder="Cidade da empresa"/>
                        </div>
                            <div className="form-group col-md-4">
                            <label htmlFor="inputEstado">Estado</label>
                            <input type="text"  name="estado" onChange={this.props.handleChange} className="form-control" value={this.state.uf} id="inputEstado" readOnly placeholder="UF da empresa"/>
                        </div>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputBairro">Bairro</label>
                        <input type="text"  name="bairro"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj" value={this.state.bairro} id="inputBairro" placeholder="Bairro da empresa"/>
                        <InputErrorMessage field={this.state.bairro}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputLogradouro">Logradouro</label>
                        <input type="text"  name="logradouro"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj" value={this.state.logradouro} id="inputLogradouro" placeholder="Logradouro da empresa"/>
                        <InputErrorMessage field={this.state.logradouro}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNumero">Numero</label>
                        <input type="text"  name="numero"  onChange={this.validade} onBlur={this.validade} className="form-control cnpj"  value={this.props.numero}id="inputNumero" placeholder="Número do endereço"/>
                        <InputErrorMessage field={this.state.numero}/>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputComplemento">Complemento</label>
                        <input type="text"  name="complemento" onChange={this.props.handleChange} className="form-control" id="inputComplemento" placeholder="Complemento do endereço"/>
                    </div>
                    <div className="form-group margin-mini-bot">
                        <label htmlFor="inputComplemento">Sua empresa possui seviço de transporte?</label><br/>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="inputSim" onChange={this.props.handleChange}  name="transporte" value="1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="inputSim">Sim</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="inputNao" onChange={this.props.handleChange}  name="transporte" value="0" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="inputNao">Não</label>
                        </div>
                    </div>
    
                    <div className="form-group flex-center">
                        <button 
                            type="button"  
                            className="btn btn-light"
                            onClick={() => this.props.nextStep(2)}>
                        
                            Continuar
                        </button>
                    </div>
                </div>
            </>
        )

    }

}
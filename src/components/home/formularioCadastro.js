import React, { Component } from 'react';

export default class FormularioCadastro extends Component{
    
    constructor(){
        super()
        this.state = {
            cnpj:false,
            razao_social:false,
            nome_empresa:false,
            telefone_empresa:false,
            cep:false,
            bairro:false,
            logradouro:false,
            numero:false
        }
        this.emptyCnpj = this.emptyCnpj.bind(this)
        this.emptyRazao = this.emptyRazao.bind(this)
        this.process = this.process.bind(this)
    }

    emptyCnpj(){
        console.log('entrou no cnpj'+this.state.cnpj)
        if(this.state.cnpj){
            console.log('oi')
            return <div className="invalid-feedback">O CNPJ não pode estar vazio</div>
        }
        return null
    }
    emptyRazao(){
        if(this.state.razao_social){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null
    }
    emptyNomeEmpresa(){
        if(this.state.nome_empresa){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }else
            return <small id="emailHelp" className="form-text text-muted">Esse será o nome que aparecerá no aplicativo</small>
    }
    emptyTelefoneEmpresa(){
        if(this.state.telefone_empresa){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null
    }
    emptyCep(){
        if(this.state.cep){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null
    }
    emptyBairro(){
        if(this.state.bairro){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null
    
    }
    emptyLogradouro(){
        if(this.state.logradouro){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null

    }
    emptyNumero(){
        if(this.state.numero){
            return <div className="invalid-feedback">Este campo não pode esta vazio</div>
        }
        return null

    }


    process(e){
        this.props.handleChange(e)
        const {name, value} = e.target

        if(value === ''){
            this.setState({[name]:true})
            switch(name){
                case 'cnpj':   
                    e.target.className += ' is-invalid'
                    break
                case 'razao_social':
                case 'nome_empresa':
                case 'telefone_empresa':
                    e.target.className += ' is-invalid'
                    break
                case 'cep':
                    e.target.className += ' is-invalid'
                    break
                case 'bairro':
                case 'logradouro':
                case 'numero':
                    e.target.className += ' is-invalid'
                    break
                default:
                    break
            }
        }else{
            this.setState({[name]:false})
            switch(name){
                case 'cnpj':   
                    e.target.className = 'form-control cnpj'
                    break
                case 'razao_social':
                case 'nome_empresa':
                case 'telefone_empresa':
                    e.target.className = 'form-control'
                    break
                case 'cep':
                    e.target.className = 'form-control cep'
                    break
                case 'logradouro':
                case 'bairro':
                case 'numero':
                    e.target.className = 'form-control cnpj'
                    break
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
                        <input type="text"  name="cnpj" onBlur={this.process} onChange={this.process} className="form-control cnpj" id="inputCnpj" value={this.props.cnpj} placeholder="Qual é o CNPJ da empresa?"/>
                        {this.emptyCnpj()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputRazaoSocial">Razão social</label>
                        <input type="text"  name="razao_social" onBlur={this.process} onChange={this.process} className="form-control" id="inputRazaoSocial" value={this.props.razaoSocial} placeholder="Razão social da empresa"/>
                        {this.emptyRazao()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNomeEmpresa">Nome da empresa</label>
                        <input type="text"  name="nome_empresa" onBlur={this.process} onChange={this.process} className="form-control" id="inputNomeEmpresa" value={this.props.nomeEmpresa} placeholder="Nome da empresa"/>
                        {this.emptyNomeEmpresa()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputTelefoneEmpresa">Telefone</label>
                        <input type="text"  name="telefone_empresa" onBlur={this.process} onChange={this.process} className="form-control" value={this.props.telefone} id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                        {this.emptyTelefoneEmpresa()}
                    </div>
                        
                    <div className="form-group">
                        <label htmlFor="inputCep">CEP</label>
                        <input type="text"  name="cep" onBlur={() => this.props.findCep(this.props.cep)} onChange={this.props.handleChange, this.process}  className="form-control cep" value={this.props.cep} id="inputCep" placeholder="CEP da empresa"/>
                        {this.emptyCep()}
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
                        <input type="text"  name="bairro" onBlur={this.process} onChange={this.process} className="form-control cnpj" value={this.props.bairro} id="inputBairro" placeholder="Bairro da empresa"/>
                        {this.emptyBairro()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputLogradouro">Logradouro</label>
                        <input type="text"  name="logradouro" onBlur={this.process} onChange={this.process} className="form-control cnpj" value={this.props.logradouro} id="inputLogradouro" placeholder="Logradouro da empresa"/>
                        {this.emptyLogradouro()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNumero">Numero</label>
                        <input type="text"  name="numero" onBlur={this.process} onChange={this.process} className="form-control cnpj"  value={this.props.numero}id="inputNumero" placeholder="Número do endereço"/>
                        {this.emptyNumero()}
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
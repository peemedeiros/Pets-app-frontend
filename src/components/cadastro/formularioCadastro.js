import React, { Component } from 'react';

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

    emptyCnpj(){
        if(this.state.cnpj){
            
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


    process = e => {
        if(this.state.cnpj === '')
            e.target.className += ' is-invalid';
        else return null
    }

    render(){
        
        if(this.props.currentStep !== 1)
            return null

        return(
            <>
                <div className='cadastroEmpresa center'>
                    <div className="form-group">
                        <label htmlFor="inputCnpj">CNPJ</label>
                        <input type="text"  name="cnpj"  onChange={this.props.handleChange} onBlur={this.process} className="form-control cnpj" id="inputCnpj" placeholder="Qual é o CNPJ da empresa?"/>
                        {this.emptyCnpj()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputRazaoSocial">Razão social</label>
                        <input type="text"  name="razao_social"  onChange={this.props.handleChange} className="form-control" id="inputRazaoSocial" value={this.props.razaoSocial} placeholder="Razão social da empresa"/>
                        {this.emptyRazao()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNomeEmpresa">Nome da empresa</label>
                        <input type="text"  name="nome_empresa"  onChange={this.props.handleChange} className="form-control" id="inputNomeEmpresa" value={this.props.nomeEmpresa} placeholder="Nome da empresa"/>
                        {this.emptyNomeEmpresa()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputTelefoneEmpresa">Telefone</label>
                        <input type="text"  name="telefone_empresa"  onChange={this.props.handleChange} className="form-control" value={this.props.telefone} id="inputTelefoneEmpresa" placeholder="Qual o telefone da sua empresa?"/>
                        {this.emptyTelefoneEmpresa()}
                    </div>
                        
                    <div className="form-group">
                        <label htmlFor="inputCep">CEP</label>
                        <input type="text"  name="cep" onBlur={() => this.findCep(this.state.cep)} onChange={this.props.handleChange}  className="form-control cep" value={this.props.cep} id="inputCep" placeholder="CEP da empresa"/>
                        {this.emptyCep()}
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
                        <input type="text"  name="bairro"  onChange={this.props.handleChange} className="form-control cnpj" value={this.state.bairro} id="inputBairro" placeholder="Bairro da empresa"/>
                        {this.emptyBairro()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputLogradouro">Logradouro</label>
                        <input type="text"  name="logradouro"  onChange={this.props.handleChange} className="form-control cnpj" value={this.state.logradouro} id="inputLogradouro" placeholder="Logradouro da empresa"/>
                        {this.emptyLogradouro()}
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputNumero">Numero</label>
                        <input type="text"  name="numero"  onChange={this.props.handleChange} className="form-control cnpj"  value={this.props.numero}id="inputNumero" placeholder="Número do endereço"/>
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
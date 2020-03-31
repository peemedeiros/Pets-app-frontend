import React, { Component } from 'react';
import ProgressBar from './progressBar';

import Step1 from './formularioCadastro';
import Step2 from './confirmacaoCadastro';
import Step3 from './cadastroFinalizado';

import { inserir } from '../../services/cadastro-empresa-services'
import { telefoneMask, cnpjMask, cepMask } from './homeMasks';

const preCadastro = () => {
    const preInfo = localStorage.getItem('@petsApp/step1');
    return JSON.parse(preInfo);
}

export default class Cadastro extends Component{

    constructor(){
        super()
        this.state = {
            currentStep:1,
            nome_dono:preCadastro().nomeDono,
            email:preCadastro().emailDono,
            celular:preCadastro().celularDono,
            senha:'',
            razao_social:'',
            nome_empresa:'',
            cnpj:'',
            telefone_empresa:'',
            logo:'imagem.jpg',
            cep:'',
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            cidade:'',
            uf:'',
            transporte:''
        }

        this.nextStep = this.nextStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCep = this.findCep.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
       
        switch(name){
            case 'cnpj':
                this.setState({[name]: cnpjMask(value)})
                break;
            case 'telefone_empresa':
                this.setState({[name]: telefoneMask(value)})
                break;
            case 'cep':
                this.setState({[name]: cepMask(value)})
                break;
            default:
                this.setState({[name]: value})
            
        }
    }

    findCep = async (cep) =>{
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

    handleSubmit = async (event) => {
        event.preventDefault()
        
        try{
            const res = await inserir(this.state);
            if(res.status === 201)
                return this.nextStep(3);

            return console.log(this.state)
        } catch (erro){
            console.log(erro)
        }
        
    }

    nextStep(step){
        return this.setState({ currentStep: step})
    }

    

    render(){
        return(
            <>
                <div className='cadastro-main'>

                    {/* <BackStep step={this.state.step} nextStep={this.nextStep}/> */}

                    <ProgressBar progresso={this.state.currentStep} />
    
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <form onSubmit={this.handleSubmit}>
                                    <Step1
                                        cnpj={this.state.cnpj}
                                        telefone={this.state.telefone_empresa}
                                        cep={this.state.cep}
                                        cidade={this.state.cidade}
                                        logradouro={this.state.logradouro}
                                        bairro={this.state.bairro}
                                        uf={this.state.uf}
                                        numero={this.state.numero}
                                        findCep={this.findCep}
                                        nextStep={this.nextStep}
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                        emptyField={this.emptyField}
                                        />
                                    <Step2
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}/>
                                    <Step3
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }
    
}
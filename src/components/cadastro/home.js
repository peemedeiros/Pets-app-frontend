import React, { Component } from 'react';

import ProgressBar from './progressBar'
import Step0 from './cadastroRestaurante';
import Step1 from './formularioCadastro';
import Step2 from './confirmacaoCadastro';
import Step3 from './cadastroFinalizado';

import './styles.css';




export default class Home extends Component{
    
    constructor(){
        super()
        this.state = {
            currentStep:0,
            empresa: []
        }
        this.nextStep = this.nextStep.bind(this);
        this.cadastroEmpresa = this.cadastroEmpresa.bind(this);
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState = ({[name]: value})
    }

    nextStep = step =>{
        return this.setState({ currentStep: step})
    }

    cadastroEmpresa(empresas){
        this.setState({
            empresa:[empresas]
        });
    }
    
    render(){
        return(
            <>  
                <ProgressBar currentStep={this.state.currentStep} />
                <Step0 
                    currentStep={this.state.currentStep} 
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    cadastroEmpresa={this.cadastroEmpresa}/>
                <Step1 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    findCep={this.findCep}/>
                <Step2 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    fileHandler={this.fileHandler}/>
                <Step3 
                    currentStep={this.state.currentStep}/>
            </>
        )
    }
}
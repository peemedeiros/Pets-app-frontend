import React, { Component } from 'react';
import axios from 'axios'

import ProgressBar from './progressBar'
import Step0 from './home-cadastro';
import Step1 from './confirmar-cadastro';
import Step2 from './cadastro-sucesso';

import './styles.css';


const URL = "http://127.0.0.1:8000/api/v1/users";
const config = {
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
}

export default class Home extends Component{
    
    constructor(){
        super()
        this.state = {
            currentStep:0,
            usuario: [],
            errors:[]
        }

        this.nextStep = this.nextStep.bind(this);
    }

    

    nextStep = step =>{
        return this.setState({ currentStep: step})
    }

    cadastrarUsuario = async usuario => {
        try {
            const response = await axios.post(URL,usuario, config)
            if(response.status === 201){
                this.setState({currentStep: 2})
            }
            return response
        } catch (error) {
            return error.response
        }
    }

    inserindoDadosUsuario = usuarios =>{
        this.setState({
            usuario:[usuarios]
        });
        console.log(this.state.usuario)
    }
    
    render(){
        return(
            <>  
                <ProgressBar currentStep={this.state.currentStep} />

                <Step0 
                    currentStep={this.state.currentStep} 
                    nextStep={this.nextStep}
                    cadastrarUsuario={this.cadastrarUsuario}/>
                <Step1 
                    currentStep={this.state.currentStep}
                    nextStep={this.nextStep}
                    inserindoDadosUsuario={this.inserindoDadosUsuario}/>
                <Step2
                    nextStep={this.nextStep}
                    currentStep={this.state.currentStep}/>
            </>
        )
    }
}
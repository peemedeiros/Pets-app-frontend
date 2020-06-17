import React, { Component } from 'react';
import Step0 from './home-cadastro';
import './styles.css';

export default class Home extends Component{
    
    constructor(){
        super()
        this.state = {
            currentStep:0,
        }
        this.nextStep = this.nextStep.bind(this);
    }

    nextStep = step =>{
        return this.setState({ currentStep: step})
    }

    render(){
        return(
            <>  
                <Step0 
                    currentStep={this.state.currentStep} 
                    nextStep={this.nextStep}/>
            </>
        )
    }
}
import React, { Component } from 'react';

import CurrentStep from '../functions/currentStep';
import ProgressBar from './progressBar';
import BackStep from '../functions/backStep';


export default class Cadastro extends Component{

    constructor(){
        super()
        this.state = {
            nomeDono:'',
            emailDono:'',
            celularDono:'',
            step:1
        }

        this.nextStep = this.nextStep.bind(this);
    }

    //Verifica o estado do step do cadastro atual
    nextStep(formStep){
        return this.setState({ step: formStep})
    }

    

    render(){
        return(
            <>
                <div className='cadastro-main'>

                    <BackStep step={this.state.step} nextStep={this.nextStep}/>

                    <ProgressBar progresso={this.state.step} />
    
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                
                                <CurrentStep step={this.state.step} nextStep={this.nextStep}/>

                            </div>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }
    
}
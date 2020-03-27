import React, { Component } from 'react';

import CadastroEmpresaForm from './formularioCadastro';
import ConfirmacaoForm from './confirmacaoCadastro';
import ProgressBar from './progressBar';

const stateInicial = {
    step : 1
}

export default class Cadastro extends Component{

    state = { ...stateInicial };

    constructor(){
        super()
        this.firstStep = this.firstStep.bind(this);
        this.secondStep = this.secondStep.bind(this);
        this.finalStep = this.finalStep.bind(this);
        this.currentStep = this.currentStep.bind(this)
    }

    firstStep(){
        return this.setState({ step: 1 })
    }
    secondStep(){
        return this.setState({ step: 2 })
    }
    finalStep(){
        return this.setState({ step: 3 })
    }

    currentStep(step){

        if(step === 1)
            return <CadastroEmpresaForm secondStep={this.secondStep}/>
         else if (step === 2)
            return <ConfirmacaoForm />
    }

    render(){

        return(
            <>
                <div className='cadastro-main'>
    
                    <ProgressBar progresso={this.state.step}/>
    
                    <div className="container">
                        <div className="row">
                            <div className="col">
                    
                                {this.currentStep(this.state.step)}

                            </div>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }
    
}
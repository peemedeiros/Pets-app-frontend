import React,{Component} from 'react'

import Step1 from './step1';
import Step2 from './step2';
import ProgressBar from './progressBar';

import './cadastro-empresa.css'

export default class Home extends Component {

    constructor(){
        super()
        this.state = {
            step:1
        }

        this.nextStep = this.nextStep.bind(this)
    }

    nextStep(step){
        return this.setState({ step:step });
    }

    render(){
        return(
            <>
                <ProgressBar nextStep={this.nextStep} step={this.state.step}/>
                <Step1 nextStep={this.nextStep} step={this.state.step}/>
                <Step2 step={this.state.step}/>
            </>
        )
    }
}
import React, { Component } from 'react';

import Step1 from './formularioCadastro';
import Step2 from './confirmacaoCadastro';
import Step3 from './cadastroFinalizado';


export default class Cadastro extends Component{

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

        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCep = this.findCep.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
    }


    // }

    // fileHandler(event){
    //     this.setState({ logo:event.target.files[0]});
    // }

    

    // handleSubmit = async (event) => {
    //     event.preventDefault()
        
    //     try{

    //         const res = await inserir(this.state);

    //         if(res.status === 201){
    //             console.log({res})
    //             // res = await uploadFoto(this.state);
    //             return this.nextStep(3);
    //         }
                
    //         return console.log(this.state)
    //     } catch (erro){
    //         console.log(erro)
    //         console.log('oi')
    //     }
        
    // }

    // nextStep(step){
    //     return this.setState({ currentStep: step})
    // }

    

    render(){
        return(
            <>
                <div className='cadastro-main'>
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
                                        fileHandler={this.fileHandler}
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
import React, { Component } from 'react'

export default class CadastroFinalizado extends Component{
    render(){
        
        if(this.props.currentStep !== 2)
            return null
        
        return(
            <>
                <div className="cadastroFinalizado center">
                    <div className="imgFinished">
                        
                    </div>
                    
                    <p>
                        Cadastro realizado com sucesso, continue para acessar o painel da sua empresa
                    </p>

                    <button type="buttom" onClick={() => this.props.nextStep(0)} className="btn btn-light center">
                        Continuar
                    </button>
                </div>

                
            </>
        )
    }

}
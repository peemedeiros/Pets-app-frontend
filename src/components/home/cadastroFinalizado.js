import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

export default class CadastroFinalizado extends Component{
    render(){
        
        if(this.props.currentStep !== 3)
            return null
        
        return(
            <>
                <div className="cadastroFinalizado center">
                    <div className="imgFinished">
                        
                    </div>
                    
                    <p>
                        Cadastro realizado com sucesso, continue para acessar o painel da sua empresa
                    </p>

                    <button type="buttom" className="btn btn-light center">
                        <Link className="nav-link" to="/"> Continuar </Link>
                    </button>
                </div>

                
            </>
        )
    }

}
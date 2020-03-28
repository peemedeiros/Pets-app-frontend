import React, { Component } from 'react'
import finishGif from '../../assets/success.gif'

export default class CadastroFinalizado extends Component{

    render(){
        return(
            <>
                <div className="cadastroFinalizado center">
                    <div className="imgFinished">
                        
                    </div>
                    <p>
                        Cadastro realizado com sucesso, continue para acessar o painel da sua empresa
                    </p>

                    <button type="button" className="btn btn-light center">
                        Continuar
                        {/* <Link className="nav-link" to="/confirmar"> Continuar </Link> */}
                    </button>
                </div>

                
            </>
        )
    }

}
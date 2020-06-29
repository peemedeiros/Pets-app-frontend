import React from 'react'
import { Link } from 'react-router-dom'

export default props =>{
    
        
    if(props.step !== 4) return null

    return(
        <>
            <div className="cadastroFinalizado center">
                <div className="imgFinished">
                    
                </div>
                
                <p>
                    Empresa cadastrada com sucesso, clique em continuar para voltar para o painel principal
                </p>

                <Link to="/painel" className="btn btn-light center">
                    Continuar
                </Link>
            </div>

            
        </>
    )
    
}
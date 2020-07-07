import React from 'react'

export default props => {
    if(props.item !== 0) return null

    return(
        <>
            <div className="main-body">
                <div className="helper"></div>
                
                <div className="empresas-body p-4">
                    <div className="title no-margin">
                        <h3>Bem-Vindo à {props.nome_empresa}</h3>
                        <hr/>
                    </div>
                </div>
            </div>
        </>
    )
}
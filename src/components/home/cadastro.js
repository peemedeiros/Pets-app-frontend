import React from 'react';

import CadastroEmpresaForm from './formularioCadastro';
import ConfirmarCadastro from './confirmacaoCadastro';

import logo2 from '../../assets/logo2.png';

export default function Cadastro(){
    return(
        <>
            <div className='cadastro-main'>
                <div className='container'>
                    <div className='nav-bar-container center'>
                        <img src={logo2} alt="logo" />
                        
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated barra-width" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CadastroEmpresaForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
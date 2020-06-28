import React from 'react';
import camera from '../../assets/camera.png';

import './cadastro-empresa.css'
export default props => {

    if(props.step !== 2) return null
        
    return(
        <>
            <div className="formularioConfirmacao center">
                <h4 className="mb-5">Escolha uma logo para sua empresa!</h4>
                <div className="form-group flex-colunm align-items-center">
                    <label htmlFor="inputLogoEmpresa" className="preview">
                        <img src={camera} alt="camera"/>
                    </label>
                    <input type="file" name='images' onChange={props.fileHandler} className="form-control hide" id="inputLogoEmpresa"/>
                    <small id="logoHelper" className="form-text text-muted">Essa será sua foto no aplicativo</small>
                </div>

                <div className="form-group">
                    <button onClick={ () => props.nextStep(3)} type="submit" className="btn btn-light center">
                        Cadastrar
                    </button>
                </div>
            </div>
        </>
    )
}
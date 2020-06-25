import React, { Component } from 'react';
import camera from '../../assets/camera.png';
import SpinnerLoader from '../template/spinnerLoader'


export default class ConfirmarCadastro extends Component{
    
    render(){
        if(this.props.step !== 2)
            return null
        
        return(
            <>
                <form onSubmit={this.props.handleSubmit} className="formularioConfirmacao center">
                    <h4 className="mb-5">Escolha uma logo para sua empresa!</h4>
                    <div className="form-group flex-colunm align-items-center">
                        <label htmlFor="inputLogoEmpresa" className="preview">
                            <img src={camera} alt="camera"/>
                        </label>
                        <input type="file" name='images' onChange={this.props.fileHandler} className="form-control hide" id="inputLogoEmpresa" multiple={true}/>
                        <small id="logoHelper" className="form-text text-muted">Essa será sua foto no aplicativo</small>
                    </div>
    
                    <div className="form-group">
                        <button 
                            disabled={this.props.disabled}
                            type="submit" 
                            className="btn btn-light center">
                            Cadastrar
                            <SpinnerLoader status={this.props.disabled}/>
                        </button>
                    </div>
                </form>
            </>
        )
    }
}
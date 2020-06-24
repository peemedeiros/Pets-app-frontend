import React, { Component } from 'react';
import camera from '../../assets/camera.png';

export default class ConfirmarCadastro extends Component{

    constructor(){
        super()
        this.state = {
            logo:''
        }
    }

    fileHandler = e =>{
        this.setState({ logo:e.target.files[0]});
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.inserindoDadosUsuario(this.state);
        this.props.nextStep(2);
    }

    render(){
        if(this.props.step !== 2)
            return null
        
        return(
            <>
                <div className="formularioConfirmacao center">
                    <h4 className="mb-5">Escolha uma logo para sua empresa!</h4>
                    <div className="form-group flex-colunm align-items-center">
                        <label htmlFor="inputLogoEmpresa" className="preview">
                            <img src={camera} alt="camera"/>
                        </label>
                        <input type="file" name='logo' onChange={this.props.handleChange} value={this.state.logo} className="form-control hide" id="inputLogoEmpresa"/>
                        <small id="logoHelper" className="form-text text-muted">Essa será sua foto no aplicativo</small>
                    </div>
    
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-light center"
                            onClick={() => this.props.nextStep(2)}>
                            Cadastrar
                        </button>
                    </div>
    
                </div>
            </>
        )

    }
    
}
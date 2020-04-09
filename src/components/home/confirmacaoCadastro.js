import React, { Component } from 'react';
import camera from '../../assets/camera.png';

export default class ConfirmarCadastro extends Component{

    render(){
        if(this.props.currentStep !== 2)
            return null
        
        return(
            <>
                <div className="formularioConfirmacao center">
                    <div className="form-group">
                        <label htmlFor="inputSenha">Senha</label>
                        <input type="password" name='senha' onChange={this.props.handleChange} className="form-control cnpj" id="inputSenha" placeholder="*********"/>
                        <small id="emailHelp" className="form-text text-muted">Não compartilhe sua senha com ninguém.</small>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="inputConfimacaoSenha">Confirmar senha</label>
                        <input type="password"  className="form-control cnpj" id="inputConfimacaoSenha" placeholder="*********"/>
                    </div>
    
                    <div className="form-group flex-colunm">
                        <label htmlFor="">Escolha uma imagem para sua empresa</label>
                        <label htmlFor="inputLogoEmpresa" className="preview">
                            <img src={camera} alt="camera"/>
                        </label>
                        <input  type="file"
                                name='logo' 
                                onChange={this.props.fileHandler} 
                                className="form-control hide" 
                                id="inputLogoEmpresa"/>
                        <small id="logoHelper" className="form-text text-muted">Essa será sua foto no aplicativo</small>
                    </div>
    
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-light center">
                            Cadastrar
                            {/* <Link className="nav-link" to="/confirmar"> Continuar </Link> */}
                        </button>
                    </div>
    
                </div>
            </>
        )

    }
    
}
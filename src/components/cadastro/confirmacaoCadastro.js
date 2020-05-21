import React, { Component } from 'react';
import camera from '../../assets/camera.png';

export default class ConfirmarCadastro extends Component{

    constructor(){
        super()
        this.state = {
            senha:'',
            logo:'',
        }
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState = ({[name]: value})
    }

    fileHandler = e =>{
        this.setState({ logo:e.target.files[0]});
    }

    //Criar function para enviar os dados 
    //armazenados no estado do componente 
    //atual para o componente pai

    render(){
        if(this.props.currentStep !== 2)
            return null
        
        return(
            <>
                <div className="formularioConfirmacao center">
                    <div className="form-group">
                        <label htmlFor="inputSenha">Senha</label>
                        <input type="password" name='senha' onChange={this.handleChange} className="form-control cnpj" id="inputSenha" placeholder="*********"/>
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
                                onChange={this.fileHandler} 
                                className="form-control hide" 
                                id="inputLogoEmpresa"/>
                        <small id="logoHelper" className="form-text text-muted">Essa será sua foto no aplicativo</small>
                    </div>
    
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-light center"
                            onClick={() => this.props.nextStep(3)}>
                            Cadastrar
                        </button>
                    </div>
    
                </div>
            </>
        )

    }
    
}
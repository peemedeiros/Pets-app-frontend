import React, {Component} from 'react';
import { signOut } from '../../../services/auth-service'

import Logo from '../../../assets/petsAppLogo2.png';
import Settings from '../../../assets/settings.png';
import Home from '../../../assets/web.png';
import Menu from '../../../assets/open-menu.png';
import Leave from '../../../assets/turn-off.png';
import house from '../../../assets/house2.png';
import Box from '../../../assets/commerce.png';
import Services from '../../../assets/business.png';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {

    constructor(){
        super()
        this.state = {
            menu:false,
        }
        
        this.menuHandler = this.menuHandler.bind(this)
    }

    menuHandler(){
        if(!this.state.menu) return this.setState({menu:true})
        
        return this.setState({menu:false})
    }

    render(){

        let display = ""
        let margin = ""
        let menu = "hide-text"

        if(this.state.menu){
            display = "menu-aberto"
            margin = "margin-right"
            menu = "show-text"
        }

        let imgURL = '';

        if(!this.props.logo){
            imgURL = house
        }else{
            imgURL = "http://127.0.0.1:8000/storage/"+this.props.logo
        }

        return(
            <>
                <div className={`side-menu ${display}`}>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Logo} alt="logo-small" className="logo"/>
                        <h5 className={`${menu}`}> Pets App </h5>
                    </div>
                    
                    <div className="separador"></div>

                    <div className={` item-side-menu ${display}`}>
                        <img src={imgURL} alt="user-logo"/>
                        <h5 className={`${menu}`}> { this.props.nome_fantasia } </h5>
                    </div>
                    <div className="separador"></div>

                    <div className={`item-side-menu ${display}`}>
                        <img src={Home} alt="home-icon"/>
                        <h5 className={`${menu}`}>
                            <Link to="painel">
                                Home
                            </Link>
                        </h5>
                    </div>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Box} alt="setting-icon"/>
                        <h5 className={`${menu}`}> Serviços </h5>
                    </div>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Services} alt="setting-icon"/>
                        <h5 className={`${menu}`}> Agendamentos </h5>
                    </div>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Settings} alt="setting-icon"/>
                        <h5 className={`${menu}`}> Configurações </h5>
                    </div>
                </div>
                <div className="top-menu">
                    <div className="void"></div>
                    <div className="top-menu-container">
                        <button className={`menu-button ${margin}`} onClick={ () => {this.menuHandler()} }>
                            <img src={Menu} alt="menu-button"/>
                        </button>
                        <div className="date-time">
                            Alguma data 
                        </div>
                        <Link to="/painel" className="btn btn-danger btn-sm sair-empresa">
                            VOLTAR
                        </Link>
                    </div>
                </div>
            </>
        )
    }
        
            
}
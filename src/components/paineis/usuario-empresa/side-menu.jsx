import React, {Component} from 'react';


import Logo from '../../../assets/petsAppLogo2.png';
import User from '../../../assets/man.png';
import Settings from '../../../assets/settings.png';
import Home from '../../../assets/web.png';
import Menu from '../../../assets/open-menu.png'
import Leave from '../../../assets/turn-off.png'
import { signOut } from '../../../services/auth-service'


export default class SideMenu extends Component {

    constructor(){
        super()
        this.state = {
            menu:false
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

        

        console.log(display)
        console.log(this.state.menu)

        return(
            <>
                <div className={`side-menu ${display}`}>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Logo} alt="logo" className="logo"/>
                        <h5 class={`${menu}`}> Pets App </h5>
                    </div>
                    
                    <div className="separador"></div>

                    <div className={` item-side-menu ${display}`}>
                        <img src={User} alt="logo"/>
                        <h5 class={`${menu}`}> Nome do usuario </h5>
                    </div>
                    <div className="separador"></div>

                    <div className={`item-side-menu ${display}`}>
                        <img src={Home} alt="logo"/>
                        <h5 class={`${menu}`}> Home </h5>
                    </div>
                    <div className={`item-side-menu ${display}`}>
                        <img src={Settings} alt="logo"/>
                        <h5 class={`${menu}`}> Configurações </h5>
                    </div>
                </div>
                <div className="top-menu">
                    <div className="void"></div>
                    <div className="top-menu-container">
                        <button className={`menu-button ${margin}`} onClick={() => {this.menuHandler()}}>
                            <img src={Menu} alt="menu"/>
                        </button>
                        <div className="date-time">
                            Alguma data 
                        </div>
                        <button onClick={signOut} className="btn btn-danger btn-sm">
                            <img src={Leave} alt="sair"/> SAIR
                        </button>
                    </div>
                </div>
            </>
        )
    }
        
            
}
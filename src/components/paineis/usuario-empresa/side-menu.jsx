import React from 'react';



import Logo from '../../../assets/petsAppLogo2.png';
import User from '../../../assets/man.png';
import Settings from '../../../assets/settings.png';
import Home from '../../../assets/web.png';
import Menu from '../../../assets/open-menu.png'
import Leave from '../../../assets/turn-off.png'


export default props => (
    <>
        <div className="side-menu">
            <div className="item-side-menu">
                <img src={Logo} alt="logo" className="logo"/>
            </div>
            <div className="separador"></div>

            <div className="item-side-menu">
                <img src={User} alt="logo"/>
            </div>
            <div className="separador"></div>

            <div className="item-side-menu">
                <img src={Home} alt="logo"/>
            </div>
            <div className="item-side-menu">
                <img src={Settings} alt="logo"/>
            </div>
        </div>
        <div className="top-menu">
            <div className="void"></div>
            <div className="top-menu-container">
                <div className="menu-button">
                    <img src={Menu} alt="menu"/>
                </div>
                <div className="date-time">
                    Alguma data 
                </div>
                <div className="bg-danger menu-button">
                    <img src={Leave} alt="sair"/>
                </div>
            </div>
        </div>
    </>
)
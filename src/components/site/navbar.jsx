import React from 'react';
import { Link } from 'react-router-dom'

export default props => {

    return(
        <nav className="nav-home">
            <div className='container d-flex justify-content-center'>
                <div className='nav-item-box'>
                    <div className='nav-itens' >
                        <Link to='/' className="router-link"> Home </Link> 
                    </div>
                    <div className='nav-itens' >
                        <Link to='/sobre' className="router-link"> Sobre nós </Link> 
                    </div>
                    <div className='nav-itens'>
                        <Link target="_blank" to='/cadastro' className="router-link"> Cadastre-se </Link> 
                    </div>
                    <div className='nav-itens'>
                        <Link target="_blank" to='/app' className="router-link"> Para usuarios </Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Login from './components/login/login';
import Cadastro from './components/home/cadastro';
import ConfirmarCadastro from './components/home/confirmacaoCadastro';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/confirmar' exact component={ConfirmarCadastro} />

            </Switch>
        </BrowserRouter>
    )
}
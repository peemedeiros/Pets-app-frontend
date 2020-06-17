import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/cadastro';
import Login from './components/login/index'
import AppLandPage from './components/usuario/appLandPage'
import Teste from './components/paineis/usuario-empresa'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/cadastro' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/app' exact component={AppLandPage} />
                <Route path='/teste' exact component={Teste} />

            </Switch>
        </BrowserRouter>
    )
}
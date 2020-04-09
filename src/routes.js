import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/cadastro/home';
import Login from './components/login/login';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/cadastro' exact component={Home}/>
                <Route path='/login' exact component={Login}/>

            </Switch>
        </BrowserRouter>
    )
}
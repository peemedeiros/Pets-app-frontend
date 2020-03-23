import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact component={Home}/>

            </Switch>
        </BrowserRouter>
    )
}
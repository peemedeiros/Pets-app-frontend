import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { privateReq, getToken } from './services/api'
import { isLogged } from './services/auth-service'
import Home from './components/cadastro';
import Login from './components/login/index'
import AppLandPage from './components/usuario/appLandPage'
import Teste from './components/paineis/usuario-empresa'
import CadastroEmpresa from './components/cadastro-empresa/index'
import Step3 from './components/cadastro-empresa/step3';
import Painel2 from './components/paineis/empresas/index'

const PrivateRoutes = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render={props => {
                if( isLogged() ){

                    privateReq.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
                    return <div><Component {...props}/></div>

                }else return <Redirect to={{pathname: '/login',state: { from: props.location }}}/>
            }}
        />
    )
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/cadastro' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/app' exact component={AppLandPage}/>
                <Route path='/teste' exact component={Step3} />
                <PrivateRoutes path='/painel/cadastrar' exact component={CadastroEmpresa} />
                <PrivateRoutes path='/painel' component={Teste} />
                <PrivateRoutes path='/empresa/:id' exact component={Painel2} />
                
            </Switch>
        </BrowserRouter>
    )
}
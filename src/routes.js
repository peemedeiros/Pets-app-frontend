import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { isLogged } from './services/auth-service'
import Home from './components/cadastro';
import Login from './components/login/index'
import AppLandPage from './components/usuario/appLandPage'
import Teste from './components/paineis/usuario-empresa'
import CadastroEmpresa from './components/cadastro-empresa/index'
import Step3 from './components/cadastro-empresa/step3';



const PrivateRoutes = ({ component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render={props => isLogged() ? (
                <div>
                    <Component {...props}/>
                </div>
            ) : (
                <Redirect to={{pathname: '/login',
                    state: { from: props.location }}}/>
                )
            }
        />
    )
}



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/cadastro' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/app' exact component={AppLandPage} />
                <Route path='/teste' exact component={Step3} />
                <PrivateRoutes path='/painel/cadastrar' exact component={CadastroEmpresa} />
                <PrivateRoutes path='/painel' component={Teste} />
                
            </Switch>
        </BrowserRouter>
    )
}
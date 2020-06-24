import React, {Component} from 'react';
import logo2 from '../../assets/logo2.png';


export default class progressBar extends Component{
    
    render(){

        let progress = "0%"
        let finishColor = "#FF6E41"
    
        if(this.props.step === 1)
            progress = "30%"
        else if( this.props.step === 2){
            progress = "80%"
        }

        return(
            <>
                <div className='container'>
                    <div className='nav-bar-container flex-center'>
                        <img src={logo2} alt="logo"/>
                    </div>
                </div>
                <div className="progress">
                    <div 
                        className="progress-bar barra-width" 
                        role="progressbar" 
                        aria-valuenow="75" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                        style={{
                            width:`${progress}`,
                            backgroundColor: `${finishColor}`
                            }}>
                    </div>
                </div>
            </>
        )
    }
}



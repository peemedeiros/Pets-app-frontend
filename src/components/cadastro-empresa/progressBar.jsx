import React, {Component} from 'react';
import logo2 from '../../assets/logo2.png';


export default class progressBar extends Component{
    
    render(){

        let progress = "0%"
        let finishColor = "#FF6E41"
    
        switch(this.props.step){
            case 1:
                progress = "30%"
                break
            case 2:
                progress = "60%"
                break
            case 3:
                progress = "80%"
                break
            default:
                progress = "100%"
                finishColor = "#9CD07B"
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



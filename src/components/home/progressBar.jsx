import React from 'react';
import logo2 from '../../assets/logo2.png';


export default function progressBar(props){
    
    let progress = "0%"
    let finishColor = "#FF6E41"

    if(props.progresso === 1)
        progress = "50%"
    else if( props.progresso === 2)
        progress = "75%"
    else{
        progress = "100%"
        finishColor = "#9CD07B"
    }
        
        return(
            <>
               
                <div className='container'>
                    <div className='nav-bar-container center'>
                        <img src={logo2} alt="logo"/>
                    </div>
                </div>
                <div className="progress">
                    <div 
                        className="progress-bar progress-bar-striped progress-bar-animated barra-width" 
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


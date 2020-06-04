import React from 'react';

export default props => {

    if(!props.error) return null

    return(
        
        <div className={`alert alert-danger`}>
            <ul>
                <h5>
                    <i className="fa fa-remove mr-2"></i> 
                    Ocorreu um erro!
                    {props.error_data.map(errors => {
                        return (
                            <li>{errors}</li>
                        )
                    })}
                </h5>
                
            </ul>
        </div>
    )
}
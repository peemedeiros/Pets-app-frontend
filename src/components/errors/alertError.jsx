import React from 'react';

export default props => {

    if(!props.error) return null

    return(
        
        <div className={`alert alert-danger`}>
            <i className="fa fa-remove mr-2"></i> 
                Ocorreu um erro!
            <ul>
                <h6>
                    {props.error_data.map((errors, i) => {
                        return (
                            <li className="errors-list" key={i} >{errors}</li>
                        )
                    })}
                </h6>
                
            </ul>
        </div>
    )

}
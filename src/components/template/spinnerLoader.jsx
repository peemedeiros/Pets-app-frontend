import React from 'react';

export default props => {
    if(!props.status) return null

    return(
        <div className="spinner-border ml-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}
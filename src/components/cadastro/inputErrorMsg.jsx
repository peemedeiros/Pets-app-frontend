import React from 'react';

export default function InputErrorMessage(props){
    if(props.field === '')
        return <div className="invalid-feedback">This field cannot be empty</div>
    return null
}


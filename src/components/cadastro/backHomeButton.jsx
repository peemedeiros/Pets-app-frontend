import React from 'react';
import backArrow from '../../assets/back-arrow.png';
import { Link } from 'react-router-dom';

export default function backButton(props){
    return(
        <>
            <Link to='/'>
                <img src={backArrow}
                    alt="back" 
                    className="backArrow"/>
            </Link>
            
        </>
    )
}
import React from 'react';
import './square.styles.css';

const Square = (props) => {
    
    return (

        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    
        );    

    
}

export default Square;
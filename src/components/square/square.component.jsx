import React from 'react';
import './square.styles.css';

const Square = (props) => {
    
    const classes = props.className ? `${ props.className} square` : `square`

    var icon;

    if (props.value == 'X') {
        icon = 'fa fa-times orange'
    }
    else if(props.value == 'O') {
        icon = 'far fa-circle green'
    }
    
    return (

        
        <button className={classes}  onClick={() => props.onClick()}>
            <i className = {icon}></i>
        </button>
    
        );    

    
}

export default Square;
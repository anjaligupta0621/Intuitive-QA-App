import React from 'react';
import '../Assets/Styling.css';

const instructions = (props) => {
    return (
        <div className="instructions">
            {props.children}
        </div>
    )
}

export default instructions;
import React from 'react';
import '../Assets/Styling.css';

const instructions = (props) => {
    return (
        <div className="instructions">
            <div>
                <h3>INSTRUCTIONS!</h3>
                <p>1. Click on Start Assessment to get started with your assessment.</p>
                <p>2. Answering all the questions is mandatory, then only you will be able to submit the test.</p>
                <p>3. You will see the score in the end.</p>
                <p>4. The passing criteria is 60%</p>
                <p>5. Click on the Close button below to return to the previous page.</p>
                <h4 style={{fontWeight:"bold", color:"maroon"}}>ALL THE BEST!</h4>
            </div>
            <button 
                className="closeBtn"
                onClick={props.clicked}>Close</button>
        </div>
    )
}

export default instructions;
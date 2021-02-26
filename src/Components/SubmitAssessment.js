import React from 'react';
import completed from '../Assets/completed.webp';

const submitAssessment = (props) => {
    return (
        <div>
            <img src={completed} alt="Completed" style={{width:"400px", height:"400px"}} />
            <p><b>You have completed your assessment!</b></p>
            <p>{props.numberOfQuestions} questions were asked.</p>
            <p>You answered {props.score} correctly.</p>
            <p>Your score is {((props.score / props.numberOfQuestions) * 100).toFixed(2)}%</p>
        </div>
    )
}

export default submitAssessment;
import React from 'react';
import completed from '../Assets/completed.webp';

const submitAssessment = (props) => {

    const score = ((props.score / props.numberOfQuestions) * 100).toFixed(2);
    let passInfo = 'Failed';
    let style = "failed"
    if (score >= 60) {
        passInfo = 'Passed';
        style = "passed";
    }


    return (
        <div>
            <img src={completed} alt="Completed" style={{width:"400px", height:"400px"}} />
            <p><b>You have completed your assessment!</b></p>
            <p>{props.numberOfQuestions} questions were asked.</p>
            <p>You answered {props.score} correctly.</p>
            <p>Your score is <b>{score}%</b>.</p>
            <p>You have <span className={style}>{passInfo}</span>.</p>
        </div>
    )
}

export default submitAssessment;
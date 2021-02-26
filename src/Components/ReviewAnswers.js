import React from 'react';
import '../Assets/Styling.css';
import assessment from '../Assets/assessment.png';

const reviewAnswers = (props) => {

    const answersReview = () => {
        return Object.keys(props.submittedData).map((index) => {
            return (
                <div>
                    <p>Answer {+index + 1}: {props.submittedData[index]} </p>
                </div>
            );
        }
        );
    }

    return (
        <div>
            <img src={assessment} alt="Review Logo" style={{width: "45px", height:"45px"}} />
            <h4>Review the answers that you have marked: </h4>
            {answersReview()}
        </div>
    )
}

export default reviewAnswers;
import React from 'react';
import '../Assets/Styling.css';
import review from '../Assets/review.png';

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
            <img src={review} alt="Review Logo" style={{width: "100px", height:"75px", margin:"20px", marginBottom:"10px"}} />
            <h4>Review the answers that you have marked: </h4>
            {answersReview()}
        </div>
    )
}

export default reviewAnswers;
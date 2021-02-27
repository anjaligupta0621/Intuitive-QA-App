import React from 'react';
import '../Assets/Styling.css';

const questionDetails = (props) => {

    const valueChangeHandler = (value) => {
        props.updateData(props.index,value);
    }

    const showOptions = () => {
        const question = props.currentQues;
        return question.options.map((option) => {
            return (
                <label>
                    <p>
                    <input
                        type="radio"
                        value={option.value}
                        checked={props.selectedAnswer === option.value}
                        onChange={() => valueChangeHandler(option.value)} />
                    {option.displayText}
                    </p>
                </label>
                
            );
        });
    }

    return (
        <div className="questionArea">
            <span className="questionText">Question {props.index + 1}: {props.currentQues.questionText} </span>
            {showOptions()}
        </div>
    );
}

export default questionDetails;
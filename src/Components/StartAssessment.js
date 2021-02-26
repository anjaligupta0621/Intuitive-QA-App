import React, { Component } from 'react';
import '../Assets/Styling.css';
import ReviewAnswers from './ReviewAnswers';
import QuestionDetails from './QuestionDetails';
import backward from '../Assets/backward.png';
import forward from '../Assets/forward.png';

class StartAssessment extends Component {

    state = {
        currentQuestion: 0,
        submittedData: {}
    }

    onChangeHandler = (index,value) => {
        const submittedData = {...this.state.submittedData};
        submittedData[index] = value;
        this.setState({submittedData:submittedData});
    }

    nextQuestionHandler = () => {
        if (this.state.currentQuestion < this.props.questions.length - 1) {
            this.setState({currentQuestion: this.state.currentQuestion + 1});
        }
    }

    previousQuestionHandler = () => {
        if (this.state.currentQuestion > 0) {
            this.setState({currentQuestion: this.state.currentQuestion - 1});
        }
    }

    navigationHeader = () => {
        return (
            //instructions to be added
            <div>
                <div>
                    {this.state.currentQuestion ? (
                        <img className="logo-btn" src={backward} alt="Previous" onClick={this.previousQuestionHandler} />)
                    : null}
                </div>
                <h6>Attempt Questions Here</h6>
                <div>
                    {this.state.currentQuestion < this.props.questions.length - 1 ? (
                            <img className="logo-btn" src={forward} alt="Next" onClick={this.nextQuestionHandler}/>
                    ) : null}
                </div>
            </div>
            
            
        )
    }

    getUserScore = () => {
        let score = 0;
        const keys_Submitted = Object.keys(this.state.submittedData);
        keys_Submitted.map((index) => {
            const answerAttempted = this.state.submittedData[index];
            const correctAnswer = this.props.questions[+index].answer;

            if (answerAttempted === correctAnswer) {
                score = score + 1;
            }
        });
        return score;
    }

    onSubmitHandler = () => {
        const score = this.getUserScore();
        this.props.onSubmit(score);
    }

    navigationFooter = () => {
        const questionsAttempted = Object.keys(this.state.submittedData).length;
        return questionsAttempted === this.props.questions.length ? (
            <button 
                onClick={this.onSubmitHandler}>Submit</button>
        ) : null;
    }

    render() {
        return (
            <div>
                <div className="reviewContainer">
                    <ReviewAnswers submittedData={this.state.submittedData} />
                </div>
                
                <div className="questionContainer">
                    {this.navigationHeader()}
                    <QuestionDetails 
                        index={this.state.currentQuestion} 
                        currentQues={this.props.questions[this.state.currentQuestion]}
                        selectedAnswer={this.state.submittedData[this.state.currentQuestion]}
                        updateData={this.onChangeHandler} />
                    {this.navigationFooter()}
                </div>
            </div>
            
        );
    }
}

export default StartAssessment;
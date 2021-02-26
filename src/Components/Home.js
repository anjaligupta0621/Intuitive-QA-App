import React, { Component } from 'react';
import assessment from '../Assets/assessment.png';
import '../Assets/Styling.css';
import StartAssessment from './StartAssessment';
import SubmitAssessment from './SubmitAssessment';
import questions from './questionList';
import Instructions from './Instructions';

class Home extends Component {

    state = {
        questions,
        score: 0,
        currentPage: 'Welcome',
        showModal: false
    }

    onStartHandler = () => {
        //console.log("Start called");
        this.setState({currentPage: 'StartAssessment'});
    }

    onSubmitHandler = (score) => {
        this.setState({currentPage: 'SubmitAssessment', score: score});
    }

    showInstructionsHandler = () => {
        return (
            <Instructions>
                <div style={{color:"black"}}>
                    1. Click on Start Assessment to start with your assessment.
                    2. Answer each question, then only you will be able to submit the test.
                    3. You will see the score in the end.
                </div>
                <button style={{color:"white",backgroundColor:"red"}}>Close</button>
            </Instructions>
        )
    }

    showWelcomePage = () => {
        return <div className="homeClass">
        <img style={{width: "45px", height:"45px"}} src={assessment} alt="Assessment Logo" />
        <h1>Hi! Welcome to the Assessment</h1>
        <button 
            className="buttonStyle"
            onClick={this.onStartHandler}>
            Start Assessment
        </button>
        <button 
            className="instructionButton"
            onClick={this.showInstructionsHandler} >
            Instructions
        </button>
    </div>
    }

    showAssessmentPage = () => {
        return <StartAssessment questions={this.state.questions} onSubmit={this.onSubmitHandler}/>
    }

    showSubmitPage = () => {
        return <SubmitAssessment numberOfQuestions={this.state.questions.length} score={this.state.score} />
    }

    render() {
        switch (this.state.currentPage) {
            case 'SubmitAssessment':
                return this.showSubmitPage();
            case 'StartAssessment':
                return this.showAssessmentPage();
            default:
                return this.showWelcomePage();
        }
    }
}

export default Home;
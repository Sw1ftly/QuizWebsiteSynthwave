import React from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_state from './my_state';
//import './my_state';

//import  my_questions from 'data/basic_questions.json';

const my_questions = 
[{
    id:1,
    question: "In 2044, what do people often use to connect to computers?",
    answers: [{ answer:"Floppy disks", isCorrect:false }, { answer: "Magic spells", isCorrect:false }, { answer: "Brain implants", isCorrect:true } ]
  },
  {
    id:2,
    question: "What is typically the purpose of cybernetic implants??",
    answers: [{ answer: "Enhancing physical abilities", isCorrect:true }, { answer: "Winning video games", isCorrect:false }, { answer:"Looking cool", isCorrect:false }]
  },
  {
    id:3,
    question: "What term describes a being that is part human and part machine?",
    answers: [{ answer: "Cyborg", isCorrect:true }, { answer: "Hologram", isCorrect:false }, { answer:"Drone", isCorrect:false }]
  }
];


class Quiz extends React.Component {

    state = {
        score: 0,
        count: 0
    };
    
    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            count: this.state.count + 1
        });
        alert("You are correct!"); // could be executed before the setStates are done!
    };

    dontIncrementScore = () => {
       this.setState({
            count: this.state.count + 1
        });
        alert("Sorry - not correct");
    };

    handleSubmit = () => {
        my_state.my_score = this.state.score;
        my_state.my_count = this.state.count;
        
        alert("Total score: " + this.state.score + "/" + this.state.count);
    }
    
    render() {
        return(
            <div style={quizPageStyle} className="QuizStyle">
            <h1>{this.props.q_prop}</h1>
            <h1></h1>
                {my_questions.map((quest) => (
                <div> 
                    <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div>
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest["id"] }
                                        key = { quest["id"] }
                                        onClick = { ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore }
                                        value = { ans["isCorrect"] } /> 
                                    { ans["answer"] }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button onClick={this.handleSubmit} className='SubmitBtn' >Submit</button>
        </div>
        );
    }
}

export default Quiz;